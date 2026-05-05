# Métriques Dashboard — SénSanté v0.6

**Auteur :** Le Pilote  
**Lab :** v0.5 → v0.6 (Dashboard)  
**Date :** 2025–2026

---

## 1. Objectif

Ce document recense toutes les métriques à afficher dans le tableau de bord de SénSanté.
Il décrit pour chaque métrique : ce qu'elle représente, comment la calculer via Prisma,
et dans quel composant l'afficher.

---

## 2. Métriques globales (KPI Cards)

Ces métriques s'affichent en haut du dashboard sous forme de cartes de synthèse.

### 2.1 Nombre total de patients

**Description :** Nombre de patients enregistrés dans la base de données.

**Requête Prisma :**
```typescript
const totalPatients = await prisma.patient.count();
```

**Composant suggéré :** `<KpiCard title="Patients" value={totalPatients} icon="users" />`

---

### 2.2 Nombre total de consultations

**Description :** Nombre total de consultations enregistrées.

**Requête Prisma :**
```typescript
const totalConsultations = await prisma.consultation.count();
```

---

### 2.3 Nombre de diagnostics IA effectués

**Description :** Nombre de consultations ayant reçu un diagnostic IA (champ `diagnosticIa` non nul).

**Requête Prisma :**
```typescript
const totalDiagnosticsIA = await prisma.consultation.count({
  where: {
    diagnosticIa: { not: null },
  },
});
```

---

### 2.4 Taux de confiance moyen

**Description :** Moyenne du champ `confiance` sur toutes les consultations ayant un diagnostic IA.

**Requête Prisma :**
```typescript
const result = await prisma.consultation.aggregate({
  _avg: { confiance: true },
  where: { confiance: { not: null } },
});
const tauxMoyen = result._avg.confiance ?? 0;
```

---

## 3. Répartition par niveau d'urgence

**Description :** Nombre de diagnostics par niveau d'urgence (`faible`, `moyen`, `urgent`).

**Requête Prisma :**
```typescript
const urgenceStats = await prisma.consultation.groupBy({
  by: ["urgence"],
  _count: { urgence: true },
  where: { urgence: { not: null } },
});
```

**Résultat attendu :**
```json
[
  { "urgence": "faible", "_count": { "urgence": 12 } },
  { "urgence": "moyen",  "_count": { "urgence": 8  } },
  { "urgence": "urgent", "_count": { "urgence": 3  } }
]
```

**Composant suggéré :** Graphique en donut (Recharts `PieChart`) avec couleurs :
- 🟢 Faible → `#22c55e`
- 🟠 Moyen → `#f97316`
- 🔴 Urgent → `#ef4444`

---

## 4. Répartition géographique (par région)

**Description :** Nombre de consultations par région du patient.

**Requête Prisma :**
```typescript
const parRegion = await prisma.patient.groupBy({
  by: ["region"],
  _count: { region: true },
});
```

**Composant suggéré :** Graphique en barres horizontales (`BarChart` Recharts) ou tableau.

---

## 5. Évolution des consultations dans le temps

**Description :** Nombre de consultations créées par mois.

**Requête Prisma :**
```typescript
const consultations = await prisma.consultation.findMany({
  select: { createdAt: true },
  orderBy: { createdAt: "asc" },
});

// Regroupement JS par mois :
const parMois = consultations.reduce((acc, c) => {
  const mois = c.createdAt.toISOString().slice(0, 7); // "2025-11"
  acc[mois] = (acc[mois] || 0) + 1;
  return acc;
}, {} as Record<string, number>);
```

**Composant suggéré :** Graphique en courbe (`LineChart` Recharts).

---

## 6. Dernières consultations

**Description :** Liste des 5 dernières consultations avec patient, symptômes et statut du diagnostic.

**Requête Prisma :**
```typescript
const dernieres = await prisma.consultation.findMany({
  take: 5,
  orderBy: { createdAt: "desc" },
  include: { patient: true },
});
```

**Composant suggéré :** Tableau `<DernieresList />` avec badge de statut.

---

## 7. Architecture du dashboard
src/
└── app/
└── dashboard/
├── page.tsx               ← Page principale du dashboard
└── components/
├── KpiCard.tsx        ← Carte métrique (patients, consultations...)
├── UrgenceChart.tsx   ← Donut chart urgence faible/moyen/urgent
├── RegionChart.tsx    ← Bar chart par région
├── EvolutionChart.tsx ← Line chart consultations dans le temps
└── DernieresList.tsx  ← Tableau des dernières consultations

---

## 8. API Route Dashboard

**Fichier :** `src/app/api/dashboard/route.ts`

```typescript
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const [
    totalPatients,
    totalConsultations,
    totalDiagnosticsIA,
    avgConfiance,
    parUrgence,
    parRegion,
  ] = await Promise.all([
    prisma.patient.count(),
    prisma.consultation.count(),
    prisma.consultation.count({ where: { diagnosticIa: { not: null } } }),
    prisma.consultation.aggregate({
      _avg: { confiance: true },
      where: { confiance: { not: null } },
    }),
    prisma.consultation.groupBy({
      by: ["urgence"],
      _count: { urgence: true },
      where: { urgence: { not: null } },
    }),
    prisma.patient.groupBy({
      by: ["region"],
      _count: { region: true },
    }),
  ]);

  return NextResponse.json({
    totalPatients,
    totalConsultations,
    totalDiagnosticsIA,
    tauxConfianceMoyen: avgConfiance._avg.confiance ?? 0,
    parUrgence,
    parRegion,
  });
}
```

---

## 9. Checklist Pilote — Lab v0.6

- [ ] Créer `src/app/dashboard/page.tsx`
- [ ] Créer l'API Route `src/app/api/dashboard/route.ts`
- [ ] Implémenter `KpiCard.tsx`
- [ ] Implémenter `UrgenceChart.tsx` (Recharts PieChart)
- [ ] Implémenter `RegionChart.tsx` (Recharts BarChart)
- [ ] Implémenter `EvolutionChart.tsx` (Recharts LineChart)
- [ ] Implémenter `DernieresList.tsx`
- [ ] Installer Recharts : `npm install recharts`
- [ ] Tester avec des données réelles issues du Lab IA
- [ ] Poser le tag `v0.6`

---

## 10. Librairies recommandées

| Librairie | Usage | Installation |
|-----------|-------|-------------|
| `recharts` | Graphiques (donut, barres, courbes) | `npm install recharts` |
| `date-fns` | Formatage des dates | `npm install date-fns` |

---

> **Note éthique :** Les métriques du dashboard sont réservées aux agents de santé autorisés.
> L'accès doit être protégé par la session (`getServerSession`).
> Les données agrégées ne doivent pas permettre d'identifier un patient individuel.

# Plan Dashboard — SénSanté v0.6

**Auteur :** Le Pilote  
**Date :** 2025–2026  
**Tag cible :** v0.6 (dashboard)

---

## 1. Objectif

Le dashboard offre une vue d'ensemble de l'activité médicale de SénSanté.  
Il permet aux responsables et médecins de suivre les tendances, les volumes et les alertes en un coup d'œil.

---

## 2. Métriques prioritaires

### 2.1 Patients
| Métrique | Description | Type |
|---|---|---|
| Total patients | Nombre total de patients enregistrés | Chiffre clé |
| Nouveaux patients (7 jours) | Inscriptions récentes | Chiffre clé |
| Répartition par sexe | % Hommes / % Femmes | Graphique camembert |
| Répartition par région | Nombre de patients par région du Sénégal | Carte / Barres |
| Pyramide des âges | Distribution par tranche d'âge | Barres horizontales |

### 2.2 Consultations
| Métrique | Description | Type |
|---|---|---|
| Total consultations | Nombre total de consultations | Chiffre clé |
| Consultations ce mois | Volume mensuel | Chiffre clé |
| Consultations par jour (30j) | Tendance récente | Courbe (line chart) |
| Délai moyen de consultation | Temps entre inscription et 1ère consultation | Chiffre clé |

### 2.3 IA (Diagnostic)
| Métrique | Description | Type |
|---|---|---|
| Diagnostics générés | Nombre total de réponses IA | Chiffre clé |
| Top 5 symptômes signalés | Symptômes les plus fréquents | Barres |
| Taux d'utilisation IA | % consultations avec diagnostic IA | Jauge |

---

## 3. Structure de la page dashboard

/dashboard
├── Ligne 1 — KPIs (4 cartes)
│   ├── Total Patients
│   ├── Consultations ce mois
│   ├── Nouveaux patients (7j)
│   └── Diagnostics IA générés
├── Ligne 2 — Graphiques principaux
│   ├── [Gauche] Consultations/jour — courbe 30 jours
│   └── [Droite] Répartition par région — barres
└── Ligne 3 — Graphiques secondaires
    ├── [Gauche] Répartition sexe — camembert
    └── [Droite] Top 5 symptômes — barres horizontales

---

## 4. Graphiques — Bibliothèque choisie

Recharts (compatible React / Next.js, pas de dépendance lourde)

Composants prévus :
- LineChart — évolution consultations dans le temps
- BarChart — patients par région, top symptômes
- PieChart — répartition par sexe

---

## 5. Source des données

Toutes les données viennent de l'API interne via fetch côté client :

| Endpoint (à créer) | Données retournées |
|---|---|
| GET /api/stats/patients | total, par sexe, par région, par âge |
| GET /api/stats/consultations | total, par jour (30j), délai moyen |
| GET /api/stats/ia | total diagnostics, top symptômes |

---

## 6. Plan d'implémentation (Lab v0.6)

1. Créer les API Routes /api/stats/* avec agrégations Prisma
2. Créer le composant KpiCard.tsx
3. Créer ChartConsultations.tsx
4. Créer ChartRegions.tsx
5. Créer ChartSexe.tsx
6. Assembler src/app/dashboard/page.tsx
7. Protéger la route (accès authentifiés uniquement)

---

## 7. Dépendances avec les autres labs

| Lab | Dépendance |
|---|---|
| v0.2 Patients | Données patients disponibles ✓ |
| v0.3 Auth | Dashboard accessible seulement si connecté |
| v0.4 Consultations | Métriques consultations disponibles |
| v0.5 IA | Métriques diagnostics disponibles |

---

## 8. Commandes Git prévues

git checkout -b feature/dashboard
git add .
git commit -m "Dashboard : KPIs + graphiques statistiques (Le Pilote)"
git push origin feature/dashboard

---

*SénSanté — Le Pilote prépare le tableau de bord. Les données arrivent. Il faut savoir les lire.*

# Tests Diagnostic IA — Le Médecin
**Projet :** SénSanté — Tag v0.5  
**Date :** 05/05/2026  
**Rôle :** Le Médecin  

---

## Tableau des tests

| # | Patient | Région | Symptômes | Diagnostic IA | Confiance | Pertinent ? | Observations |
|---|---------|--------|-----------|---------------|-----------|-------------|--------------|
| 1 | Lamine Yamal | Matam | Fièvre, Fatigue, Diarrhée | Paludisme ou infection gastro-intestinale, potentiellement aggravée par des facteurs environnementaux et sanitaires spécifiques à la région de Matam | 70% | ✅ Oui | Le contexte géographique de Matam (zone enclavée, accès limité à l'eau potable) est bien pris en compte. Diagnostic différentiel cohérent. |
| 2 | Sandra Martine | Dakar | Fatigue, Essoufflement, Vertiges | Anémie, carence en fer ou autres troubles du sang, ou encore une infection telle que le paludisme ou la dengue, qui sont fréquentes au Sénégal, notamment dans la région de Dakar | 60% | ✅ Oui | Le diagnostic différentiel est large mais cohérent. L'IA propose plusieurs pistes sérieuses. La confiance plus basse reflète bien l'ambiguïté des symptômes. |
| 3 | Dieng Omar | Saint-Louis | Éruption cutanée, Vomissements, Maux de tête | Les symptômes pourraient être liés à une infection virale telle que la dengue ou le paludisme, fréquents dans la région de Saint-Louis. Il est également possible que ces symptômes soient liés à une autre maladie infectieuse ou à une réaction allergique. | 60% | ✅ Oui | La région de Saint-Louis est bien identifiée comme zone à risque dengue/paludisme. Le diagnostic est prudent et propose plusieurs hypothèses raisonnables. |
| 4 | Amy Sy | Kédougou | Frissons, Douleur abdominale, Fatigue | Paludisme ou infection gastro-intestinale, possiblement due à une bactérie ou un parasite | 60% | ✅ Oui | Kédougou est une zone endémique au paludisme — le diagnostic est très cohérent avec le contexte local. Les frissons + fatigue orientent bien vers le paludisme. |
| 5 | Moussa Niang | Kaolack | Toux, Douleur thoracique, Fièvre | Pneumonie ou infection respiratoire, éventuellement liée à la tuberculose ou à une autre maladie pulmonaire. Il est également important de considérer la possibilité de paludisme ou d'autres maladies infectieuses courantes dans la région de Kaolack. | 60% | ✅ Oui | Le diagnostic respiratoire est pertinent. L'IA mentionne la tuberculose — pathologie réelle au Sénégal. La mention du paludisme en co-diagnostic reflète bien le contexte sénégalais. |

---

## Observations générales

- **Le contexte géographique influence le diagnostic** : Pour chaque patient, l'IA mentionne explicitement la région (Matam, Dakar, Saint-Louis, Kédougou, Kaolack) et adapte ses hypothèses aux pathologies locales.
- **Le paludisme est systématiquement considéré** : Il apparaît dans 4 diagnostics sur 5, ce qui est cohérent avec la réalité épidémiologique du Sénégal.
- **La confiance est modérée (60-70%)** : L'IA ne surdiagnostique pas — elle reste prudente, ce qui est approprié pour un outil de pré-diagnostic.
- **Le disclaimer est toujours affiché** ✅ : "Ceci n'est pas un diagnostic médical." apparaît dans toutes les consultations.
- **Les combinaisons de symptômes spécifiques donnent de meilleurs résultats** : Le test #5 (Toux + Douleur thoracique + Fièvre) a produit le diagnostic le plus précis et le plus détaillé.

---

## Cas limites / diagnostics discutables

- **Test #2 (Sandra Martine)** : Les symptômes Fatigue + Essoufflement + Vertiges sont très génériques. Le diagnostic différentiel est large (anémie, paludisme, dengue) — dans un vrai contexte médical, ces symptômes nécessiteraient des examens biologiques (NFS, goutte épaisse) avant tout diagnostic.
- **Test #3 (Dieng Omar)** : La mention "réaction allergique" aux côtés de dengue/paludisme illustre la limite du pré-diagnostic par symptômes seuls — l'éruption cutanée peut avoir des causes très différentes.

---

## Influence de la région — Analyse

| Région | Pathologies mentionnées par l'IA | Cohérence |
|--------|----------------------------------|-----------|
| Matam | Paludisme, infection gastro-intestinale | ✅ Zone sahélienne, eau rare |
| Dakar | Paludisme, dengue, anémie | ✅ Zone urbaine, dengue en hausse |
| Saint-Louis | Dengue, paludisme | ✅ Zone du fleuve, vecteurs présents |
| Kédougou | Paludisme, infection parasitaire | ✅ Zone forestière, très endémique |
| Kaolack | Tuberculose, pneumonie, paludisme | ✅ Zone dense, pathologies respiratoires réelles |

**Conclusion** : La région influence bien le diagnostic dans tous les cas testés. ✅

---

## Conclusion générale

Le système de diagnostic IA de SénSanté fonctionne correctement pour un pré-diagnostic. Les résultats sont :
- **Contextualisés** : La région est prise en compte dans chaque analyse.
- **Prudents** : Aucun diagnostic définitif n'est posé, la confiance reste entre 60-70%.
- **Éthiques** : Le disclaimer médical est systématiquement affiché.
- **Pertinents** : Les pathologies suggérées correspondent aux réalités épidémiologiques du Sénégal.

Le système ne remplace pas un professionnel de santé, mais il peut aider un agent de santé communautaire à orienter rapidement un patient vers le bon type de soins.

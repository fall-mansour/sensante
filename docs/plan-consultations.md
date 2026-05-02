# Plan — Formulaire de Consultation (Le Médecin)

## Champs du formulaire

- **patient** : sélection du patient depuis la liste (lié à la table Patient)
- **date** : date de la consultation (format JJ/MM/AAAA)
- **symptomes** : texte libre décrivant les symptômes du patient
- **statut** : état de la consultation ("en_attente" ou "termine")
- **notes** : observations complémentaires du médecin (optionnel)

## Format des symptômes

Les symptômes seront saisis en texte libre pour rester flexibles.
Exemples : "Fièvre, toux, fatigue" — "Maux de tête, vertiges"

## Lien avec les autres fonctionnalités

- Une consultation est toujours liée à un patient existant
- L'Oracle (IA) utilisera les symptômes pour générer un pré-diagnostic
- Le Dashboard (Pilote) affichera le nombre de consultations ce mois
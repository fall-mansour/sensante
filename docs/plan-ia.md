# Plan d'Intégration IA - SénSanté

## 1. Objectifs
Ce document définit la préparation technique pour l'intégration de l'intelligence artificielle dans l'application SénSanté.

## 2. Configuration de la Plateforme
Les ressources suivantes ont été configurées :
* **Fournisseur :** Groq (https://console.groq.com).
* **Compte :** Créé et opérationnel.
* **Authentification :** Clé API obtenue sur la console Groq.

## 3. Test de Validation
La connectivité a été vérifiée avec succès via la commande suivante :
* **Outil :** `curl`.
* **Résultat :** La clé API est valide et capable de recevoir des réponses du modèle.

## 4. Stratégie d'Intégration
L'IA sera utilisée pour transformer les symptômes saisis en suggestions de diagnostics :
* Les données de consultation seront envoyées à l'API Groq.
* Le flux suivra le modèle établi : Navigateur → API Route → Groq API → Réponse JSON.
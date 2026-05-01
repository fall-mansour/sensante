# Plan d'authentification — Le Bouclier

## Objectif
Mettre en place l'authentification dans SénSanté avec NextAuth.js.

## Étapes prévues

### 1. Installation
- Installer NextAuth.js : npm install next-auth
- Installer bcrypt pour le hachage des mots de passe : npm install bcryptjs

### 2. Configuration
- Créer src/app/api/auth/[...nextauth]/route.ts
- Configurer le provider Credentials (email + mot de passe)
- Ajouter NEXTAUTH_SECRET et NEXTAUTH_URL dans .env

### 3. Inscription
- Créer une API Route POST /api/auth/register
- Hasher le mot de passe avec bcrypt avant de l'enregistrer en base
- Créer le formulaire d'inscription

### 4. Connexion
- Utiliser la page /login déjà créée (Lab React/Next 2)
- Connecter le formulaire à NextAuth signIn()

### 5. Protection des pages
- Utiliser les sessions NextAuth pour protéger les routes
- Rediriger vers /login si non connecté

### 6. Rôles
- Trois rôles : AGENT, MEDECIN, ADMIN (déjà dans le schéma Prisma)
- Afficher le contenu selon le rôle de l'utilisateur connecté

## Ressources
- Documentation NextAuth.js : https://next-auth.js.org
- Lab Auth : v0.3
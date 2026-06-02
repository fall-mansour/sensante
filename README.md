# SénSanté

Assistant de santé communautaire avec IA.

## Stack technique 
- Next.js 14 (App Router)
- Tailwind CSS
- Prisma + PostgreSQL 
- Groq API (Llama 3)
- NextAuth.js
- Docker Compose 

## Installation
### Initiale
```bash
npm install 
cp .env.example .env # puis remplir les valeurs 
npx prisma db push
npm run dev
```
### NextAuth et Bcrypt
```bash
# Installer NextAuth et Bcrypt.
npm install next-auth bcrypt
npm install --save-dev @types/bcrypt

# Ajouter les nouvelles variables d'environnement avec :
cp .env.example .env

# Remplacer USER et PASSWORD de DATABASE_URL par ceux de votre base de données PostgreSQL.
# Remplacer la valeur de NEXTAUTH_SECRET par le secret généré avec :
openssl rand -base64 32
```
## Équipe 
Licence 3 GLSI - ESP/UCAD - 2025-2026
## Lancer avec Docker

### Prérequis
- Docker Desktop installé

### Étapes

1. Cloner le projet
```bash
git clone https://github.com/fall-mansour/sensante
cd sensante
```

2. Configurer les variables d'environnement
```bash
cp .env.exemple .env
# Remplir GROQ_API_KEY et NEXTAUTH_SECRET dans .env
```

3. Lancer l'application
```bash
docker compose up --build
```

4. Créer les tables (première fois uniquement)
```bash
docker compose exec app npx prisma db push
```

5. Ouvrir le navigateur
http://localhost:3000
### Arrêter
```bash
docker compose down
```

> Les données persistent grâce au volume `pgdata`. Ne jamais faire `docker compose down -v` sauf pour repartir de zéro.

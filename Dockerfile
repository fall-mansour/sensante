# 1. Image de base : Node.js 20 sur Alpine Linux
FROM node:20-alpine 
RUN apk add --no-cache openssl

# 2. Installation des dépendances système pour Prisma et Next.js
# openssl est vital pour le Query Engine de Prisma
# libc6-compat permet d'exécuter des binaires compilés pour glibc sur Alpine
RUN apk add --no-cache openssl libc6-compat

# 3. Répertoire de travail dans le conteneur
WORKDIR /app

# 4. Copier les fichiers de dépendances EN PREMIER (Optimisation du cache)
COPY package.json package-lock.json ./

# 5. Installer les dépendances
RUN npm ci

# 6. Copier le reste du code source
COPY . .

# 7. Nettoyage et préparation
RUN rm -f prisma.config.ts

# 8. Générer le client Prisma
# On force la génération pour l'environnement Linux-musl (Alpine)
RUN npx prisma generate

# 9. Déclarer les ARG nécessaires au build Next.js
# Ces variables doivent être présentes au moment du build (RUN npm run build)
ARG GROQ_API_KEY
ARG NEXTAUTH_SECRET

ENV GROQ_API_KEY=$GROQ_API_KEY
ENV NEXTAUTH_SECRET=$NEXTAUTH_SECRET
# On définit l'URL de production si nécessaire pour le build
ENV NEXT_TELEMETRY_DISABLED 1

# 10. Compiler Next.js pour la production
RUN npm run build

# 11. Déclarer le port utilisé par l'app
EXPOSE 3000

# 12. Commande de démarrage
CMD ["npm", "start"]
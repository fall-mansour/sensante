# 1. Image de base : Node.js 20 sur Alpine Linux
FROM node:20-alpine

# 2. Répertoire de travail dans le conteneur
WORKDIR /app

# 3. Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# 4. Installer les dépendances
RUN npm ci

# 5. Copier le reste du code source
COPY . .

# 6. Supprimer le fichier qui cause l'erreur de type
RUN rm -f prisma.config.ts

# 7. Générer le client Prisma
RUN npx prisma generate

# 8. Déclarer les ARG nécessaires au build Next.js
ARG GROQ_API_KEY
ENV GROQ_API_KEY=$GROQ_API_KEY

# 9. Compiler Next.js pour la production
RUN npm run build

# 10. Déclarer le port utilisé
EXPOSE 3000

# 11. Commande de démarrage
CMD ["npm", "start"]
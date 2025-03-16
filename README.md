# Portfolio de R4iden

Bienvenue sur le portfolio de R4iden. Ce projet est un site web personnel pour présenter mes compétences et projets en tant que développeur web UI & UX.

## Aperçu

![Aperçu du site](public/img/preview.png)

## Fonctionnalités

- Affichage dynamique des citations
- Intégration avec Discord pour afficher l'activité en ligne
- Liste des serveurs Discord avec des statistiques en temps réel
- Vidéo de fond en boucle
- Icônes sociales pour les liens externes

## Prérequis

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [pnpm](https://pnpm.io/) (version 6 ou supérieure)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/votre-utilisateur/r4iden.git
    cd r4iden
    ```

2. Installez les dépendances :

    ```bash
    pnpm install
    ```

## Lancer le projet

Pour lancer le projet en mode développement, utilisez la commande suivante :

```bash
pnpm dev
```

Le site sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Construire le projet

Pour construire le projet pour la production, utilisez la commande suivante :

```bash
pnpm build
```

Les fichiers construits seront disponibles dans le répertoire `.output/public`.

## Générer le projet statique

Pour générer le projet en tant que site statique, utilisez la commande suivante :

```bash
pnpm generate
```

Les fichiers générés seront disponibles dans le répertoire `dist`.

## Aperçu de la production

Pour prévisualiser le projet construit, utilisez la commande suivante :

```bash
pnpm preview
```

## Structure du projet

Voici un aperçu de la structure du projet :

```
r4iden/
├── .gitignore
├── app.vue
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── README.md
├── tsconfig.json
├── types.d.ts
├── components/
│   ├── Badges.vue
│   ├── DiscordBox.vue
│   ├── Profile.vue
│   ├── ServerBox.vue
│   ├── SocialIcon.vue
│   └── icons/
│       ├── MemberOffline.vue
│       ├── MemberOnline.vue
│       ├── View.vue
│       └── social/
│           ├── buyMeCoffee.vue
│           ├── github.vue
│           └── instagram.vue
├── public/
│   ├── favicon.ico
│   ├── img/
│   │   ├── pp.gif
│   │   ├── badges/
│   │   │   └── boostSince1month.png
│   │   └── presence/
│   └── video/
│       └── background.mp4
```
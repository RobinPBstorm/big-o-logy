# How to REACT

## Installation

Nodejs est nécessaire (si possible la dernière version)

Pour vérifier sa version de node et de npm
```bash
node -v 

npm -v
```

### Creation d'un nouveau projet

```bash
npm create vite@latest nom-du-projet
```


si create-vite n'a pas été installé avant, un prompt indique: 
`
create-vite@9.1.0
Ok to proceed? (y)
`
Ce qui va permettre l'installation de la bibliothéque

Ensuite, on aura une série de prompt:

 - Le choix du framework 
`
Select a framework:
`
> React

 - Sélection d'une variation (langage principalement utilisé):
`
◇  Select a variant:
│  JavaScript
`

> Javascript

 - Choix d'un linter (qualité de code):

 `
 ◇  Use ESLint instead of Oxlint?
│  Yes (ESLint)
 `

ESLint est le linter historique alors Oxlint est plus récent (écrit en rust).
Il y a un risque rencontré des incompatibilité avec Oxlint mais il gagne en popularité.

> Yes (ESLint)

 - Proposition d'installer les dépendances:

 `
 ◇  Install with npm and start now?
 │  No
 ` 

Nous pouvons aussi le faire manuellement
 > No


### Premier lancement

```bash
# se déplacer dans le dossier du projet
cd nom-projet

# installation des dépendances (indiquer dans le fichier package.json)
npm install

# lance la commande dans la section script de package.json nommé dev via npm
npm run dev
```

Le projet est maintenant lancé

Le port par défaut est le 5173

Pour changer le port du projet, on donner le paramètre --port dans le package.json (pour le scripts 'dev')


## Bonus: Deployer sur le github page

un pipeline a été créé pour que le github montre le résultat en cas de push ou de pull request sur la branche main.

Ce pipeline est dans .github/workflow

Un ajout dans le vite.config.js a été fait

```js
export default defineConfig({
  plugins: [react()],
  // ajout de la base du projet (nom du repo git)
  base: '/big-o-logy/',
})
```

Sur github, modifions les paramètres dans pages:

Pour Build and Deployment, choisissons "Github Actions"
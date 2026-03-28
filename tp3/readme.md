# TP 3 : Projet 1 - starship

## Mise en place du TP

  Cette mise en place est similaire à celle du TP précédent. Le dossier `tp3` contient une structure telle que celle décrite dans ce [document](https://www.fil.univ-lille.fr/~routier/enseignement/licence/js-s4/html/template-app.html).  
  
  1. Dans le dossier `tp3/` exécutez
```bash  	  
tp3$  npm install
```  
  2. Exécutez la commande `npm run build` pour créer le dossier `./dist/` et construire un premier *bundle*
  3. Vous pouvez ouvrir le fichier `dist/index.html`, pour vérifier que tout s'est bien déroulé en consultant la console (<kbd>Ctrl Shift K</kbd>) dans laquelle vous devez lire le message `le bundle a été généré`.  

  >  Attention, le résultat <strong>ne se consulte pas</strong> avec le fichier `src/index.html` : vous devez faire vos modifications et votre travail dans le dossier `src/` **mais le résultat du travail est observé dans le dossier `dist/`**.

  4.	Pendant le TP vous devrez compléter ou créer les modules JavaScript demandés.  
    Comme dans le TP précédent, profitez des facilités offertes par Webpack pendant la phase de développement pour construire le bundle et visualiser les résultats "à chaud" en démarrant le serveur de développement :Après chaque modification, il faut générer le <q>nouveau</q> <i>bundle</i>, toujours à l'aide de la commande <code>npm run build</code> et c'est le fichier **`dist`**`/index.html` qu'il faut consulter pour avoir le résultat

```bash
tp3$  npm run dev-server
```

  **C'est la solution que l'on vous conseille d'adopter.**

  5. N'oubliez pas d'exécuter la commande <code>npm run build</code> après l'arrêt du serveur de développement pour mettre à jour le dossier `dist/`.

> NB : le dossier `dist/` ne sera pas mis sur le dépôt car il peut être regénéré à partir des sources.

## Votre travail

```

Installation et exécution du projet

Pour installer le projet, il faut d’abord exécuter la commande npm install. Cela permet d’installer toutes les dépendances nécessaires dans le dossier node_modules.

Ensuite, pour générer le projet final, il faut lancer npm run build. Cette commande crée le dossier dist qui contient la version prête à être exécutée.

Une fois le build terminé, il suffit d’ouvrir le dossier dist puis de lancer le fichier index.html. On peut l’ouvrir directement dans un navigateur ou utiliser Live Server. Le jeu se lance automatiquement.

Pendant l’exécution, vous pouvez ouvrir la console du navigateur avec Ctrl + Shift + K pour vérifier que tout fonctionne correctement. Un message confirme que le bundle a bien été généré.

Concernant le projet, j’ai suivi les consignes du professeur. Le code utilise des classes comme Game et Basket, des fonctions classiques pour les methodes et des fonctions fléchées pour les fonctiosn, ainsi que des getters et setters. Le projet est bien structuré et respecte la conception demandée.

J’ai passé du temps sur la conception et la logique du jeu pour obtenir un résultat propre et fonctionnel. Le jeu fonctionne bien et il est jouable sans problème.

Vous pouvez jouer sans problème et profiter du jeu. J’espère que vous apprécierez le fonctionnement, le gameplay et la structure du code.
```

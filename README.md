# Projet front exemple pour les modules MEG

[![build status](https://git.rca.lan/nilar/module-front/badges/master/build.svg)](https://git.rca.lan/nilar/module-front/commits/master)
[![coverage report](https://git.rca.lan/nilar/module-front/badges/master/coverage.svg)](https://git.rca.lan/nilar/module-front/commits/master)

## Structure du projet

```
Projet
+-app
|	+-__tests__
|	+-exemple
|	|	+- __tests__
|	|	+- index.js
|	+- index.js
+-mock
| 	+- *.json
+-test
+-webpack
|	- devServer.js
| 	- loader.js
|	- plugins.js
--package.json
--webpack.config.babel.js
--gitlab-ci.yml
```
* __app__ contient les sources de l'application
* __\__tests____ contient les tests unitaires de l'application exécutés par Mocha.
	* Il faut un dossier de test par dossier / composant
* __mock__ contient les fichiers JSON pour le mocker le backEnd.
* __test__ contient les fichiers de configuration et les fichiers utilitaires pour les TU
* __webpack__ contient les fichiers de configuration webpack
	* devServer.js contient la configuration du server de developpement (mock et proxy vers tomcat)
	* loader.js contient la définition de tout les loaders utilisés
	* plugins.js contient la définition de tout les plugins utilisés

## Renommage

Dans ce squelette, le nom du module et du context est `module`.  
Il faut le renommer avec le contexte du module cible.  
Ce nom doit être le même côté front et côté back.  
Il est notamment présent dans les mocks, dans le fichier `app.module.js`

## configuration de dev

il faut ajouter un fichier de configuration (ignoré par git) `webpack/webpack.config.dev.js`

```js
export default {

    // a remplacer par votre IP
    IP: 'localhost',

    // a remplacer par le PORT du serveur front
    FRONT_PORT: 3010,

    // a remplacer par le PORT du serveur back
    BACK_PORT: 3020,

    // URL générée du serveur front
    get FRONT_URL() {
        return 'http://' + this.IP + ':' + this.FRONT_PORT;
    },

    // URL générée du serveur back
    get SERVER_URL() {
        return 'http://' + this.IP + ':' + this.BACK_PORT;
    },

    // a remplacer pour s'authentifier sans les plugins des navigateurs
    CAS_USER: 'nom.prenom+ec@rca.fr'
};

```

Ce fichier permet de définir les variables  __IP__ et __PORT__ du server backend.

La Variable __mockBackend__ permet d'utilisé les fichiers JSON du repertoire __mock__ si elle est true.


## Script Yarn

`yarn start` : lancement du serveur de développement

`yarn start-mock` : lancement serveur de développement avec un mock back 

`yarn release` : lancement du build pour la production

`yarn test` : lancement des TUs, vérification de la couverture de code (warning si < 80%) et vérifiction eslint

`yarn test-js` : lancement des tests unitaires en mode watch

---

`yarn lint` : vérification eslint

`yarn test-js-once` : lancement des tests unitaires

`yarn test-cov` : vérification de la couverture de code, il est possible de demandé un couverture de code minimum ou non


## Outils développement

Voici la liste des outils utilisés pour le développement :

[Webpack](https://webpack.js.org/) : pour le serveur de développement et le build de production

[Mocha](https://mochajs.org/) : pour exécuter les tests unitaires

[Chai](http://chaijs.com/) : pour les assertions des TUs

[Sinon](http://sinonjs.org/) : pour les mocks des TUs

[Itanbul](https://github.com/istanbuljs/nyc#nyc) :Pour la couverture de code

[Eslint](http://eslint.org/) : pour la qualité du code

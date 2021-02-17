# Site de recettes avec React, React Router, appel API et auth JWT

Un site web de recettes codé en React, utilisant React Router pour la navigation, faisant appel à un API et utilisant l'auth JWT.
Projet réalisé lors de ma formation Fullstack Javascript au sein de l'école O'clock.

## Lancer le projet

Télécharger ou cloner le repos.

### Prérequis

* Avoir installé Node sur sa machine (voir [la doc](https://nodejs.org/en/docs/) pour un guide d'installation complet).
* Avoir installé Yarn sur sa machine (voir [la doc](https://yarnpkg.com/getting-started/install) pour un guide d'installation complet).

### Installer le projet

#### Backend

Naviguer dans le dossier backend puis Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet.

```
yarn
```

Puis lancer la commande yarn start pour lancer le projet

```
yarn start
```

Le serveur se lance sur le port 3001.

##### Routes

- `GET http://localhost:3001/recipes`

- `POST http://localhost:3001/login`

=> fournir un objet contenant email et password, avec ces identifiants

```
{
    email: 'philippe.etchebest@cuisine.io',
    password: 'bonnebouffe'
}
```
- `GET http://localhost:3001/recipes`

=> pour cette route, un JWT est nécessaire, il est en place dans l'app

#### Frontend

Naviguer dans le dossier frontend puis Lancer la commande yarn pour installer les dépendances nécessaires au fonctionnement du projet.
```
yarn
```

Puis lancer la commande yarn start pour lancer le projet

```
yarn start
```

Le serveur se lance sur le port 8080.

## Naviguer dans l'application

Commencez par vous logger grâce à la modale de connexion pré-remplie.
Vous trouverez ensuite de bonnes recettes à cuisiner :)

## Codé avec

* SCSS
* React
* Redux
* React Router
* JWT

## Auteur

* **Nicolas PELLAN** - *Initial work* - [npellan](https://github.com/npellan)

## Remerciements

Merci à Sébastien, mon professeur React lors de ma formation au sein de l'école O'Clock.

## License

This project is licensed under the MIT License.

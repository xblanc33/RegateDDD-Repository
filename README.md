# RegateDDD (French)
Exercice illustrant une façon d'appliquer les patterns tactiques du DDD (Value Object, Entity, Aggregate et Repository).


## L'application
L'application développée simule des régates nautiques.

On peut créer une régate (**Regate**) en définissant un point GPS (**PointGPS**) de départ et d'arrivé.
La régate est alors ouverte aux inscriptions.
On peut alors s'inscrire, ce qui va entrainer la création d'un bateau (**Bateau**).
On peut aussi fermer la régate aux inscriptions ; cela empêche les nouvelles inscriptions.
Enfin on peut démarrer la régate.
Il est alors possible de changer le cap des bateaux.

Ce code n'est pas très complexe mais il exploite les patterns tactiques du DDD (VO, Entity et Aggregate).


## Choix de conception DDD 

Le code que nous avons développé pour cette application suit les principes du DDD.

En particulier, nous avons appliqués les patterns tactiques suivants :
* Value Object (Objet immutable identifé par ses valeurs) pour les classes **Cap** et **PointGPS**
* Entity (Objet mutable avec un identifiant) pour la classe **Bateau**
* Aggregate (Objet composite) pour la classe **Regate**
* Repository (Interface de sauvegarde des agrégats) pour la classe **RegateRepository**


## compiler

Vous devez avoir JavaScript et NPM 

    npm i typescript -g
    npm i
    npm run compile


## tester

    npm test


## Correction

La branche **correction** propose une correction.








En JavaScript, les méthodes slice, split, et splice sont utilisées pour manipuler des tableaux (arrays) et des chaînes de caractères (strings) de différentes manières. Voici une explication détaillée de chaque méthode :

1. Méthode slice()
Utilisation avec les Tableaux
La méthode slice() renvoie une copie superficielle d'une portion d'un tableau dans un nouveau tableau, sélectionnée entre deux indices (début inclus, fin exclu).

Syntaxe :
array.slice(begin, end);
** begin (obligatoire) : Indice de début.
** end (optionnel) : Indice de fin (exclu).
```js
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
let citrus = fruits.slice(1, 3);

console.log(citrus); // ['Orange', 'Lemon']
```
Utilisation avec les Chaînes de Caractères
La méthode slice() peut également être utilisée avec les chaînes de caractères pour extraire une section de la chaîne et retourner une nouvelle chaîne.

2. Méthode split()
La méthode split() divise une chaîne de caractères en un tableau de sous-chaînes, en utilisant un séparateur spécifié pour déterminer où chaque division doit se produire.

Syntaxe :
string.split(separator, limit);
separator (obligatoire) : Le motif qui décrit où chaque division doit se produire. Peut être une chaîne de caractères ou une expression régulière.
limit (optionnel) : Un entier qui limite le nombre d'éléments dans le tableau renvoyé.
```js
let str = "Hello, world!";
let words = str.split(" ");

console.log(words); // ['Hello,', 'world!']
```

3. Méthode splice()
La méthode splice() change le contenu d'un tableau en supprimant ou en remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments en place.

Syntaxe :
array.splice(start, deleteCount, item1, item2, ...);
start (obligatoire) : Indice de début.
deleteCount (optionnel) : Nombre d'éléments à supprimer.
item1, item2, ... (optionnel) : Éléments à ajouter au tableau.
```js
let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.splice(2, 1, 'Lemon', 'Kiwi');

console.log(fruits); // ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']
```

### Résumé des Différences
slice() : Utilisé pour créer une copie d'une portion d'un tableau ou d'une chaîne de caractères.
split() : Utilisé pour diviser une chaîne de caractères en un tableau de sous-chaînes basées sur un séparateur.
splice() : Utilisé pour modifier le contenu d'un tableau en supprimant, remplaçant ou ajoutant des éléments.



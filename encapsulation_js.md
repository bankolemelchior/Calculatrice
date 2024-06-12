#### L'Encapsulation en JavaScript
L'encapsulation est un concept clé de la Programmation Orientée Objet (POO) qui consiste à restreindre l'accès à certaines composantes d'un objet. Cela signifie que les détails internes de l'implémentation d'un objet sont cachés de l'extérieur, ne laissant accessibles que certaines parties de cet objet via des méthodes publiques. En JavaScript, on peut mettre en œuvre l'encapsulation de plusieurs façons.

## Utilisation des conventions de nommage
Une méthode simple pour indiquer qu'une propriété ne doit pas être accessible directement est d'utiliser une convention de nommage, comme préfixer la propriété par un underscore _.

```js
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  setName(name) {
    this._name = name;
  }

  getAge() {
    return this._age;
  }

  setAge(age) {
    if (age > 0) {
      this._age = age;
    } else {
      console.log('Please enter a valid age');
    }
  }
}

const person = new Person('Alice', 30);
console.log(person.getName()); // Output: Alice
person.setAge(32);
console.log(person.getAge()); // Output: 32
```

## Utilisation de champs privés (Symboles)
Les symboles permettent de créer des clés d'objet qui ne peuvent pas être accidentellement accédées ou modifiées depuis l'extérieur.

```js
const _age = Symbol('age');

class Person {
  constructor(name, age) {
    this.name = name;
    this[_age] = age;
  }

  getAge() {
    return this[_age];
  }

  setAge(age) {
    if (age > 0) {
      this[_age] = age;
    } else {
      console.log('Please enter a valid age');
    }
  }
}

const person = new Person('Bob', 40);
console.log(person.getAge()); // Output: 40
```

## Utilisation de champs privés (#)
Depuis ECMAScript 2019, JavaScript prend en charge les champs privés avec le préfixe #.

```js
class Car {
  #engineStatus = false;

  startEngine() {
    this.#engineStatus = true;
    console.log('Engine started');
  }

  stopEngine() {
    this.#engineStatus = false;
    console.log('Engine stopped');
  }

  isEngineRunning() {
    return this.#engineStatus;
  }
}

const myCar = new Car();
myCar.startEngine(); // Output: Engine started
console.log(myCar.isEngineRunning()); // Output: true
myCar.stopEngine(); // Output: Engine stopped
console.log(myCar.isEngineRunning()); // Output: false
```

## Pourquoi utiliser l'encapsulation ?
✅ Protection des données : Empêche l'accès non autorisé et la modification des données.
✅ Modularité : Sépare les préoccupations en cachant les détails internes, rendant le code plus modulaire et maintenable.
✅ Contrôle : Permet de contrôler comment les données sont lues ou modifiées en fournissant des méthodes spécifiques pour accéder ou mettre à jour les propriétés.

En résumé, l'encapsulation améliore la robustesse et la sécurité de votre code en limitant l'accès direct aux propriétés et en permettant un contrôle précis de la manière dont les données sont manipulées.
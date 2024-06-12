/* POO */

class Artiste {
    constructor(nomDeScene, nombreAlbume, pays, age=null, vivant) {
        this.nomDeScene = nomDeScene;
        this.nombreAlbume = nombreAlbume;
        this.pays = pays;
        this.age = age;
        this.vivant = vivant;
    }

    presentation() {
        console.log(`${this.nomDeScene} dispose à son actif ${this.nombreAlbume} albume(s). Il est ${this.pays} et agé de ${this.age}ans`)
    }
}

let drake = new Artiste("Drake", 8, "USA", 29, true);
let mj = new Artiste("Michael Jackson",10, "USA", 50, false )
console.log(drake);
console.log(mj.nomDeScene);
mj.presentation();

class Person {
    constructor(name, age) {
      this._name = name; // Propriété "privée"
      this._age = age; // Propriété "privée"
    }
  
    get Name() {
      return this._name;
    }
  
    setName(name) {
      this._name = name;
    }
  
    get Age() {
      return this._age;
    }
  
    set Age(age) {
      if (age > 0) {
        this._age = age;
      } else {
        console.log('Please enter a valid age');
      }
    }
  }
  
  const person = new Person('Alice', 30);
  console.log(person._name); // Output: Alice
//   person.setAge(32);



let cettePersonne = {
    firstName: "Sonny",
    lastName:"Sangha",
    // middleName: "Sambeni"
}

let {firstName, lastName} = cettePersonne;
const {firstName:fn, lastName:ln, middleName ="Sam", age = 40} = cettePersonne;

console.log(firstName);
console.log(lastName);

console.log('fn', fn);
console.log('ln', ln);
console.log('ln', middleName);
console.log('ln', age);


const myArray = [56, "Mel", "Bravo", "Delta"];
let [rue, , nom] = myArray //ici la deuxième valeur du tableau n'est pas prise en compte

let [x, ...y] = myArray; //l'opérateur rest doit être le dernier élément
console.log(x);
console.log(y);

let name1 = "Sanny";
let name2 = "Sanya";

// const namArray = [name1, name2];
[name2, name1] =  [name1, name2];;
// console.log(name1);
// console.log(name2);


let member = {
    id: 01,
    fullName: {
        firstN: "Abraham",
        lastN:"Lonie",
    }
    
};

let {id, fullName:{firstN, lastN}, fullName} = member;
console.log(fullName);

var names = ['Lea', 'John', 'Rachel', 'Yehuda'];
(function() {
	for (n in names) {
		console.log(n);
	}
})();


// let i = 0;
// while( i < 10) {
//   console.log(i);
//   i++;
// }

for(let i = 0; i <= 10; i+=2) {
  console.log(i);
}



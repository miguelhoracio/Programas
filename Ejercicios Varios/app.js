// let Palindromo = "amo la pacifica paloma";
// let espacio = "";
// Palindromo.toLowerCase;

// console.log(Palindromo.length);
// for (let i = 0; i < Palindromo.length; i++) {
//     if (Palindromo[i]!=""){

//     }
//   console.log(Palindromo[i]);
// }

// const lana = prompt("Cuanta lana tienes?");
// let rico = 1000000,
//   NoRico = Math.floor(Math.random() * 500000 + 1),
//   Pobre = 0;
// if (lana >= rico) {
//   console.log("I'm rich! I have " + lana + "!");
// } else if (lana > NoRico && lana < Rico) {
//   console.log("I'm not rich but I have " + lana);
// } else if (lana > Pobre && lana < NoRico) {
//   console.log("I'm poor I only have " + lana);
// } else {
//   console.log("You put a wrong number");
// }

// console.log("The limit between poor and middle class is: "+NoRico);

// //function declarations

// function square(i) {
//   return i * i;
// }

// square(5);

// console.log(square(15));

// function longitud(string) {
//   return string.length;
// }

// //function Expression

// const cuadrado = function (number) {
//   return number*number;
// }

// const Pokemon = new Object();
// Pokemon.name = "Juan";
// Pokemon.tipo = "Mayonesa";
// Pokemon.fuerza = 9;
// Pokemon.resistencia = 34;

// const Pokeball = {
//   TienePokemon: true,
//   name: "Robertochu",
//   tipo: "Agua",
//   fuerza: 100,
//   resistencia: 100,
//   EstaVivo: true,

//   KillPokemon: function() {
//     this.EstaVivo = false;
//   },

//   AumentarFuerza: function() {
//     this.fuerza = fuerza + 10;
//   },

//   AumentarResistencia: function() {
//     this.resistencia = resistencia + 10;
//   },

//   LiberarPokemon: function() {
//     this.Tie
//     nePokemon = false;
//   },

//   PokemonAPokeball: function(Pokemon) {
//     Pokeball.name = Pokemon.name;
//     Pokeball.tipo = Pokemon.tipo;
//     Pokeball.fuerza = Pokemon.fuerza;
//     Pokeball.resistencia = Pokemon.resistencia;
//   }
// };

// Pokeball.PokemonAPokeball(Pokemon);

// const fruits = ["Manzana", "piña", "camaron"];

// fruits.forEach(function(cualquierNombre){
// console.log(cualquierNombre);
// };

// const element = document.getElementById("task-title");
// console.log(element);

// for (let i = 0; i < 300; i++) {
//   element.style.color = "red";
//   element.style.color = "blue";
//   element.style.color = "black";
// }

// console.log(element.innerHTML);
// console.log(element.innerText);
// element.innerHTML = "<p>Tihs is nice</p>"

// const element = document.querySelector("ul");
// console.log(element);
// element.style.color = "blue";

// elements = document.getElementsByClassName("collection-item");
// console.log(elements);
// arrayElements = Array.from(elements);

// arrayElements.array.forEach(function(element) {

// });

// elements = document.getElementsByTagName("li");

// let odds = document.querySelectorAll("li:nth-child(odd)");
// let even = document.querySelectorAll("li:nth-child(even)");
// console.log(odds);
// console.log(even);

// odds.forEach(function(li) {
//   li.style.background = "grey";
// });
// even.forEach(function(li) {
//   li.style.background = "purple";
// });

// const list = document.querySelector("ul");

// console.log(list);
// nodeArray = Array.from(list.childNodes);
// nodeArray.forEach(function(node) {
//   console.log(node + " is " + node.nodeType);
// });

// Childern of children
// const list = document.querySelector("ul");
// childrenList = list.children;
// console.log(childrenList[1].children);

// Insertar Element

// const li = document.createElement("li");
// li.className = "collection-item s12";
// li.id = "new-li";
// li.setAttribute("title", "New li Item");
// const newTextNode = document.createTextNode("New List Item");
// console.log(newTextNode);

// li.appendChild(newTextNode);
// ul = document.querySelector("ul.collection");
// ul.appendChild(li);

// del = document.createElement("a");
// del.href = "#";
// del.className = "delete-item, secondary-content";
// del.innerHTML = '<i class="fa fa-times"></i>';
// li.appendChild(del);

// Insertar Nodo
// const newHeading = document.createElement("h2");
// const textParagraph = document.createTextNode("This is a new title");

// newHeading.id = "task-title";
// newHeading.appendChild(textParagraph);

// const oldHeading = document.getElementById("task-title");
// const parent = oldHeading.parentNode;

// console.log(parent);

// parent.replaceChilde(newHeading, oldHeading);

// Remove Element
// let lis = document.querySelectorAll("li");
// lis.forEach(function(li) {
//   li.remove();
// });

// let list = document.querySelector("ul");
// list.removeChild();

// const clearButton = document.querySelector(".clear-tasks");
// const punto = document.createTextNode("Se borro");
// const div = document.querySelector("div.card-action");
// clearButton.addEventListener("click", eventHandler);

// function eventHandler(e) {
//   e.preventDefault();
//   let Seleccionar = document.querySelectorAll("li");
//   Seleccionar.forEach(function(li) {
//     li.remove();
//   });
//   div.appendChild(punto);
// }
// console.log(clearButton);

// const clearBtn = document.querySelector(".clear-tasks");
// const heading = document.querySelector("h5");
// const card = document.querySelector(".card");

// // Click
// //clearBtn.addEventListener("click", eventHander);
// // DblClick
// //clearBtn.addEventListener("dblclick", eventHander);
// //clearBtn.addEventListener("mousedown", eventHander);
// //card.addEventListener("mouseup", eventHander);
// card.addEventListener("mouseenter", eventHander);
// card.addEventListener("mouseleave", eventHander);
// card.addEventListener("mousemove", eventHander);

// function eventHander(event) {
//   console.log(`EVENT TYPE ${event.type}`);

//   heading.textContent = `Mouse X: ${event.offsetX} Mouse Y: ${event.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${event.offsetX},${
//     event.offsetY
//   },40)`;

//   event.preventDefault();
// }

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const list = document.querySelector(".collection");
// console.log(list);
// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   //   console.log(`event type ${e.type}`);
//   //   console.log(taskInput.value);

//   newTask = document.createElement("li");
//   newTask.setAttribute("class", "collection-item");
//   newTask.innerHtml = `${
//     taskInput.value
//   }<a href="#" class="delete-item secondary-content">
//   <i class="fa fa-times"></i>
// </a>`;
//   list.appendChild(newTask);
//   e.preventDefault();
// }

// const firstName = localStorage.getItem("nombre");
// console.log(firstName);

// const obj = {
//   nombre: "Miguel",
//   apellido: "Hernandez"
// };

// personString = JSON.stringify(obj);
// deRegreso = JSON.parse(personString);
// console.log(deRegreso);

//  EVENT DELEGATION

// const bodyNode = document.body;

// bodyNode.addEventListener("click", eventHandler);

// function eventHandler(e) {
//   if (e.target.className === "fa fa-times") {
//     console.log("Delete!");
//     e.target.parentElement.parentElement.remove();
//   }

//   e.preventDefault();
// }

//Event Bubbling

// const childNode = document.querySelector("li");
// const parentNode = document.querySelector("ul");
// const grandParentNode = document.querySelector(".card-action");
// const granGrandParentNode = document.querySelector(".card-content");

// childNode.addEventListener("click", function() {
//   console.log("Child Node: li");
// });

// parentNode.addEventListener("click", function() {
//   console.log("Parent Node: ul");
// });

// grandParentNode.addEventListener("click", function() {
//   console.log("Grand Parent Node: card-action");
// });

// granGrandParentNode.addEventListener("click", function() {
//   console.log("Gran Grand Parent Node: card-content");
// });

//Objetos instanciar variables
// let roberto = {
//   firstName: "roberto"
// };

// console.log(roberto);

// function Person(name, bday) {
//   this.firstName = name;
//   this.birthday = new Date(bday);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   };
// }

// const alan = new Person("alan", "01/01/1990");
// // const cesar = new Person("cesar");

// console.log(alan);
// console.log(alan.calculateAge());

//Primitives and objects
// const name1 = "josue";
// const name2 = new String("josue");

// console.log(name1);
// console.log(name2);

// if (name1 === name2) {
//   console.log("Same name");
// } else {
//   console.log("diferent");
// }

//Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = Date(dob);
// }
// //Prototype can be modified
// Person.prototype.calculateAge = function(){
//     const diff = Date.now() = this.birthday.getTime();
//     const epoch = new Date(diff);
//     return Math.abs(epoch.getUTCFullYear-1970);
// };

// const persona = new Person("abc", "xyz", "02/02/1997");
// const albert = new Person("Albert", "Einstein", "March/14/1922");
// const marie = new Person("Marie", "Sktdowska", "02/02/1997");
// console.log(persona);

//Prototype functions
// function Mammal(order, family, genus, species) {
//   this.order = order;
//   this.family = family;
//   this.genus = genus;
//   this.species = species;
// }

// Mammal.prototype.getFullClasification = function() {
//   return `${this.species}.${this.genus}.${this.family}.${this.order}`;
// };

// function Dog(name, breed, dob) {
//   Mammal.call(this, "Carnivora", "Canidae", "Canis", "Canis Lupus");

//   this.name = name;
//   this.breed = breed;
//   this.dob = new Date(dob);
// }

// // coco = new Dog("coco", "pug", "1/January/2011");
// // console.log(`Mammal classification: `${coco.getFullClasification()}`);

// Dog.prototype = Object.create(Mammal.prototype);
// Dog.prototype.constructor = Dog;
// coco = new Dog("coco", "pug", "1/January/2011");
// console.log(`Mammal classification: ${coco.getFullClasification()}`);

// Dog.prototype.getFullClasification = function() {
//   return `${this.name}.${this.breed}.${this.species}.${this.genus}.${
//     this.family
//   }.${this.order}`;
// };
// console.log(`Dog classification: ${coco.getFullClasification()}`);

// const organPrototype = {
//   condition: function() {
//     return `Hello, im a ${this.isHealthy} ? "healthy" : "sick" ${
//       this.organName
//     } of the "${this.organSystem} sistem`;
//   },

//   getSick: function(disease) {
//     this.disease = disease;
//     this.isHealthy = false;
//   },
//   getCured: function() {
//     this.disease = null;
//     this.isHealthy = true;
//   }
// };

// const liver = Object.create(organPrototype);
//     liver.organName = "liver";
//     liver.organSystem = "digestive";
//     liver.isHealthy;

//Clases

// class Dog {
//   constructor(name, breed, dob) {
//     this.name = name;
//     this.breed = breed;
//     this.dob = new Date(dob);
//   }
// }

// const benjie = new Dog("Benji", "Yorkie", "1/1/1999");
// console.log(benjie);

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//   }
//   greeting() {
//     return "Hello there" + firstName + " " + lastName;
//   }
//   calculateAge() {
//     const diff = Date.now() - this.dob.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
//   static yearsInBetween(date1, date2) {
//     const initialDate = new Date(date1);
//     const endDate = new Date(date2);
//     const diff = endDate.getTime() - initialDate.getTime();
//     const epoch = new Date(diff);
//     return Math.abs(epoch.getUTCFullYear() - 1970);
//   }
// }

// // const alan = new Person("Alan", "Villarreal", "1/1/1998");
// // console.log(alan);
// // console.log(alan.calculateAge());

// console.log(Person.yearsInBetween("01/01/1920", "01/01/1975"));

class Fruits {
  constructor(name, color, calories) {
    this.name = name;
    this.color = color;
    this.calories = calories;
  }
  info() {
    return `this ${this.color} ${this.name} contains ${this.calories}`;
  }
}

class Smoothie extends Fruits {
  constructor(name, color, calories, size, hasMilk) {
    super(name, color, calories);

    this.size = size;
    this.hasMilk = hasMilk;
  }
  countCalories() {
    let totalCals;
    if (this.size === "large") {
      totalCals = 3 * Number.parseInt(this.calories);
    } else if (this.size === "medium") {
      totalCals = 2 * this.calories;
    }

    return totalCals;
  }
}

const banana = new Smoothie("banana", "amarillo", 120, "medium", true);
console.log(banana);
console.log(banana.countCalories());

// Object built in Methods //

const person = {
  firstName: "Hamed",
  lastName: "Medjedovic",
  age: 16,
};

// Object.freeze(obj) metoda cini objekat nepromenljivim

person.age = 17;
console.log(person);
// // Object.freeze(person);
// person.age = 22;
// console.log(person);

// Object.seal(obj) cini objekat promenljivim s tim sto nema mogucnosti dodavanja(ili brisanja) svojstava i metoda.

// Object.seal(person);
// person.age = 22;
console.log(person);
// delete person.age;
// console.log(person);

// Object.keys() vraca niz kljuceva :

console.log(Object.keys(person));

// Object.entries() vraca niz nizova :
// Svaki podniz je niz od dva elementa

const entries = Object.entries(person);
const niz = entries.flat().filter((el) => typeof el === "string");
console.log(niz);

// Object.is(obj1,obj2) vraca true ili false

const obj1 = {
  ime: "Mitar",
  prezime: "Vranic",
};

const obj2 = {
  ime: "Mitar",
  prezime: "Vranic",
};

const obj3 = obj1;
console.log(Object.is(obj1, obj2)); // false
console.log(Object.is(obj1, obj3)); // true

const ime = "Bakir";
const prezime = "Ujkanovic";
const godine = 19;
// const godine = 19; godine ce biti undefined

const person2 = {
  ime,
  prezime,
  godine,
};
console.log(person2);

// Destructuring

person3 = {
  firstName: "Hasan",
  lastName: "Mujanovic",
  age: 18,
};
// const firstName = person3.firstName;
// console.log(firstName);

const { firstName } = person3;
console.log(firstName);

const godine1 = [
  { strarost: 18 },
  { strarost: 19 },
  { strarost: 25 },
  { strarost: 17 },
  { strarost: 15 },
  { strarost: 16 },
  { strarost: 15 },
  { strarost: 18 },
];
const novegod = godine1.filter((el) => el.strarost > 17);
console.log(novegod);



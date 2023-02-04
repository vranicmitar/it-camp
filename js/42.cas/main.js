const niz = [4, 5, 5, 6, 4, 9, -1, 5];
// Klonirati niz.

const niz3 = niz.map((el) => el);
console.log(niz3);

let niz2 = [];
for (i of niz) {
  niz2.push(i);
}
console.log(niz2);

// spread operator(...)
// Pomocu njega kloniramo niz ili objekat.

const niz4 = [...niz];
// const niz4 = [...niz,15,44,55]; mogu se dodavati elementi pre i posle
console.log(niz4);

const obj = {
  firstName: "Haris",
  lastName: "Muslic",
  status: "samo liverpul",
  age: 19,
};

const obj2 = { ...obj, status: false, age: obj.age + 1 }; // takodje se mogu dodavati elementi i menjati
console.log(obj2);

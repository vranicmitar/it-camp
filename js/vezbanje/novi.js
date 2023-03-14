// destructuring

const korisnik = {
  ime: `Mitar`,
  prezime: `Vranic`,
  godine: 20,
};

const { ime, prezime, godine } = korisnik;
console.log(ime, prezime, godine);
console.log(korisnik);

let niz = [1, 2, 3, 4, 5, 6];
let prvi, drugi, ostatak;
[prvi, drugi, ...ostatak] = niz;

console.log(prvi);
console.log(drugi);
console.log(ostatak);

for ([key, value] of Object.entries(korisnik)) {
  console.log(`${key} : ${value}`);
}

let geust = `siuu`;
let geust1 = `bre`;

console.log(([geust, geust1] = [geust1, geust]));

// closure

const izracunaj = (broj) => {
  return function (broj2) {
    return broj * broj2;
  };
};

let proizvod1 = izracunaj(5);
console.log(proizvod1(2)); // 10

let proizvod2 = izracunaj(3);
console.log(proizvod2(1)); // 3

// primer sa neta

// javascript closure example

// outer function
function greet() {
  // variable defined outside the inner function
  let name = "John";

  // inner function
  function displayName() {
    // accessing name variable
    return "Hi" + " " + name;
  }

  return displayName;
}

const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value

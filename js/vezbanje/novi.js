// destructuring

const korisnik = {
  ime: `Mitar`,
  prezime: `Vranic`,
  godine: 20,
};

const { ime, prezime, godine } = korisnik;
// console.log(ime, prezime, godine);
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

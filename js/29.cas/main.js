// unshift() metoda dodaje na pocetku niza jedan ili vise elemenata.
// unshift() metoda prikazuje novu duzinu niza.
const niz = ["cetvrtak", "petak", "subota"];

niz.unshift("ponedeljak", "utorak", "sreda");
console.log(niz);

console.log(niz.unshift("ponedeljak", "utorak", "sreda"));

// shift() metoda brise prvi element niza i svim ostalim elementima smanjuje index za 1.
// shift() metoda prikazuje izbrisani element.

niz.shift();
console.log(niz);

// delete keyword za brisanje odredjenog elementa unutar niza :
// preko delete keyword mozemo izbrisati bilo koji element iz niza ali n ataj nacin ostavljamo rupe u nizu (undefined vrednosti).

delete niz[4];
console.log(niz);

// concat() metoda se koristi za spajanje nizova.concat() metoda pravi novi niz s  tim sto kao argument mozmeo poslati i string, ne mora iskljucibo biti niz.

const muskarci = ["Mitar", "Tarik", "Dzenan"];
const devojke = ["Miona", "Merisa", "Hatidza"];
const grupa = muskarci.concat(devojke, "Mehmed", "Omar");
console.log(grupa);

// Iz naseg niza napraviti dva niza muskarci i devojke, s tim sto se Omar ne sme naci nigde.

function imena(niz) {
  let muskarci = [];
  let devojke = [];
  for (osoba of niz) {
    if (osoba === "Omar") {
      continue;
    } else if (osoba[osoba.length - 1] === "a") {
      devojke.push(osoba);
    } else {
      muskarci.push(osoba);
    }
  }
  return `Muskarci su ${muskarci} \n Devojke su ${devojke}`;
}

console.log(imena(grupa));

// 2.

function napravi(nizz) {
  let noviniz = [];
  for (i = 0; i < nizz.length; i += 2) {
    noviniz.push(nizz[i]);
  }
  return noviniz;
}
console.log(napravi([1, 2, 3, 4, 5]));

// 3.
const pozitivni = (niz) => {
  let niz2 = [];
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      niz2.unshift(niz[i]);
    }
  }
  return niz2;
};
console.log(pozitivni([1, 5, -10, -1]));

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

// Domaci:
// 1. Napraviti funkciju koja pravi novi niz, koji ce sadrzati samo elemente koji su se nalazili na parnim mestima unutar originalnog niza.
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// [2,4,6,8,10,12,14]
const parnePozicije = (niz) => {
  const parni = [];
  for (let i = 0; i < niz.length; i++) {
    // i = pozicija
    if (i % 2 === 0) {
      parni.push(niz[i]);
    }
  }
  return parni;
};
console.log(parnePozicije([1, 2, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 14]));
// 2. Iz nekog niza izdvojiti sve parne brojeve.(Napraviti novi niz)
const parniBr = (niz) => {
  const parni = [];
  for (let broj of niz) {
    if (broj % 2 === 0) {
      parni.unshift(broj);
    }
  }
  return parni;
};
console.log(parniBr([2, 4, 1, 6, 34, 80, 77, 3, 88]));
// 3. Iz nekog niza izdvojiti sve neparne brojeve.(Napraviti novi niz)
const neparniBr = (niz) => {
  const neparni = [];
  for (let broj of niz) {
    if (broj % 2 === 1) {
      neparni.unshift(broj);
    }
  }
  return neparni;
};
console.log(neparniBr([0, 1, 7, 8, 4, 22, 90, 505, 25, 3]));
// 4. Iz nekog niza izdvojiti sve pozitivne brojeve.(Napraviti novi niz)
function pozitivniBr(niz) {
  let pozitivni = [];
  for (let broj of niz) {
    if (broj > 0) {
      pozitivni.unshift(broj);
    }
  }
  return pozitivni;
}
console.log(pozitivniBr([1, -2, 4, -7, -9, 8, 0]));

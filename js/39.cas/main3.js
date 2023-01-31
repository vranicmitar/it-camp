// Domaci zadatak:
// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: [0622222, 02033322],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maximalnaBrzina = 260;
myCar.povecanjeBrzine = function (ubrzanje) {
  if (this.trenutnaBrzina + ubrzanje > this.maximalnaBrzina) {
    return `Nije moguce voziti preko makimalne brzine`;
  } else {
    this.trenutnaBrzina += ubrzanje;
  }
};
myCar.povecanjeBrzine(30); // menjanje svojstva
console.log(myCar.povecanjeBrzine(240));

myCar.smanjenjeBrzine = function (smanjenje) {
  if (this.trenutnaBrzina - smanjenje < 0) {
    return `Ne mozete smanjiti brzinu za tu vrednost`;
  } else {
    this.trenutnaBrzina -= smanjenje;
  }
};

console.log(myCar.smanjenjeBrzine(40));

myCar.smanjenjeBrzine(25);
console.log(myCar); // trenutna brzina je sad 5

myCar.koci = function () {
  this.trenutnaBrzina = 0;
};

myCar.koci();
console.log(myCar);

// Domaci zadatak:
// // Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

const person = {
  firstName: "Mitar",
  lastName: "Vranic",
  language: [],
  setLanguage: function (jezik) {
    if (!this.language.includes(jezik)) {
      this.language.push(jezik);
    }
  },
  setNickName: function () {
    let prvi = this.firstName[0].toUpperCase() + this.firstName[1];
    let drugi = this.lastName[0].toLowerCase() + this.lastName[1];
    return prvi.concat(drugi);
  },
};

console.log(person.setLanguage("Srpski jezik"));
console.log(person.setNickName());

// 2. Zadatak
const radnik = {
  firstName: "Mitar",
  lastName: "Vranic",
  fullname: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  adresa: {
    ulica: "Avnoja",
    broj: "bb",
    grad: "Novi Pazar",
    getAdress: function () {
      return `${radnik.firstName} ${radnik.lastName} zivi u ulici ${this.ulica} ${this.broj} u ${this.grad} `;
    },
  },
};

console.log(radnik.fullname());
console.log(radnik.adresa.getAdress());
// // 3. Zadatak
const automobil = {
  marka: "Audi",
  model: "Q7",
  boja: "Bela",
  pogon: "quattro",
  menjac: "Automatik",
  km: 240000,
  vlasnik: ["062321552", "063930630"],
  garaza: {
    parking: "JKP Servis",
    vikend: "od 17 free",
    satnaKarta: "50",
    dnevnaKarta: "200",
    mesecnaKarta: "2000",
    platiZa: function (odPrvog, doPoslednjeg) {
      const prvi = odPrvog.getDate();
      const poslednji = doPoslednjeg.getDate();
      const ukupno = poslednji - prvi;
      return `Cena parkinga je ${ukupno * this.dnevnaKarta} `;
    },
  },
};

console.log(
  automobil.garaza.platiZa(new Date(2022, 10, 10), new Date(2022, 10, 15))
);


// const automobil = {
//   marka: "Audi",
//   model: "Q7",
//   boja: "Bela",
//   pogon: "quattro",
//   menjac: "Automatik",
//   km: 240000,
//   vlasnik: ["062321552", "063930630"],
//   garaza: {
//     parking: "JKP Servis",
//     vikend: "od 17 free",
//     satnaKarta: "50",
//     dnevnaKarta: "200",
//     mesecnaKarta: "2000",
//     platiZa: function (odPrvog, doPoslednjeg) {
//       const prvi = odPrvog.getTime();
//       const poslednji = doPoslednjeg.getTime();
//       const razlika = Math.abs(poslednji - prvi);
//       // 1000*60*60*24
//       const brojDana = razlika / (1000 * 60 * 60 * 24);
//       return `Cena parkinga je ${brojDana * this.dnevnaKarta} dinara`;
//     },
//   },
// };

// console.log(
//   automobil.garaza.platiZa(new Date(2023, 0, 21), new Date(2023, 0, 26))
// );

const amer = {
  ime: "Amer",
  prezime: `Honic`,
  god: 19,
  imePrezime: function () {
    return `${this.ime} ${this.prezime}`;
  },
};
const emin = {
  ime: "Emin",
  prezime: `Zukanovic`,
  god: 19,
};
console.log(emin);

// Pozivanje neke f-je za odredjeni objekat se moze izvrsiti pomocu funkcija :
// 1.call()
// 2.apply()
// 3.bind()

// Prvo treba pristupiti f-ji, pa onda objasniti na kom se objektu treba primeniti.

console.log(amer.imePrezime.call(emin)); // call() f-ja

const restoran1 = {
  hrana: `Spaghetti`,
  gosti: `Veoma zadovoljni`,
  lokacija: `Stevana Nemanje,64`,
};

const restoran2 = {
  hrana: `Burek`,
  gosti: `Veoma zgrozeni`,
  lokacija: `Stanice Spasojevic,40`,
};

function poruka(mesto, drzava) {
  return `Vecerasnji specijalitet je bio ${this.hrana}.Nasi gosti su ${this.gosti}, te smo srecni zbog toga. \nNalazimo se u ulici ${this.lokacija}, u ${mesto},${drzava}`;
}

// call() zahteva za aprvi argument ima objekat na koji se primenjuhe , ostali argumenti su argumenti metode koja se izvrsava.

console.log(poruka.call(restoran1, `Novi Pazar`, `Srbija`));

// apply() metoda za prvi argument ima objekat na koji se primenjuje drugi argument je niz gde smestamo argumente metode koja se izvrsava.

console.log(poruka.apply(restoran2, ["Sarajevo", "BiH"]));

// bind() zahteva preth. definisammnje promenjive (f-je) za odredjeni objekat pa onda pozivanje f-je sa eventualnim argumentima.

const binFunc = poruka.bind(restoran1);
console.log(binFunc("Novi Sad", `Srbija`));

// Random zad:
// Write a JavaScript function to retrieve all the values of an object's properties.

const getValues = (obj) => {
  const values = [];
  for (let key in obj) {
    values.push(obj[key]);
  }
  return values;
};

const obj = {
  marka: "Audi",
  model: "A6",
};

console.log(getValues(obj));
// for (let x in obj) {
//   console.log(x); kljucevi
// }

// Domaci:
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
    satnaKarta: 50,
    dnevnaKarta: 200,
    mesecnaKarta: 2000,
  },
};
// Napraviti funkciju koja ce povecati vrednost satne, dnevne i mesecne karte za po 20%.
// Za bilo koji objekat koji ima properties: satnaKarta, dnevnaKarta i mesecnaKarta.
// Nakon toga je primeniti za automobil objekat i ispisati automobil nakon toga.

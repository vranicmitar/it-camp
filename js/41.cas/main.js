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


// domaci

const getValues
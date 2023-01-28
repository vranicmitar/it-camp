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

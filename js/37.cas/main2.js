// Rekurzivna funkcija poziva izvrsenje same sebe unutar funkcije.
// Efekat petlje mozemo postici rekurzivnom funkcijom.

// Ispisi brojeve od 10 do 1 ->
for (i = 10; i >= 1; i--) {
  console.log(i);
}

const ispisivanje = (n) => {
  console.log(n);
  if (n - 1 > 0) {
    ispisivanje(n - 1);
  }
};
ispisivanje(10);

// falt() metoda se koristi kad unutar niza imamo koji je niz i zelimo da sve podelemente izvucemo na nacin da oni pred. elemente gl. niza .

const niz = [
  ["jabuka", "ananas", "jagoda", "kruska"],
  ["krompir", "luk", "paradajz"],
  ["pite", "razna jela"],
];

const niz2 = niz.flat();
console.log(niz2);

let a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

// zadatak 10 (nizovi)
const rasporedi = (arr) => {
  let outputStr = "";
  for (i = 0; i < arr.length; i++) {
    outputStr += `row ${i} \n`;
    for (k of arr[i]) {
      outputStr += `${k} \n`;
    }
  }
  return outputStr;
};
console.log(rasporedi(a));

// zadatak 16 (nizovi)

const leapYears = (from, to) => {
  const leapYears = [];
  for (i = from; i <= to; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
      leapYears.push(i);
    }
  }
  return leapYears;
};
console.log(leapYears(2000, 2012));

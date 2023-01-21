// every() meotda proverava da li su svi elementi niza zadovoljili uslov.
// every() meotda vraca boolean.

// da li su svi u grupi punoletni?

const godine = [16, 19, 18, 19, 15, 17, 21, 20, 17];
const isEveryAdult = godine.every((godina) => godina > 17);
console.log(isEveryAdult); // false

const niz = [
  "Tarik",
  "Bakir",
  "Haris",
  "Aladin",
  "Mehmed",
  "Hatidza",
  "Hasan",
  "Miona",
  "Mitar",
];

const prebroj = niz.every((ime) => ime.length > 4);
console.log(prebroj);

// some() metoda preovrava da li bar jedan element niza zadovoljava uslov.
// some() metoda vraca boolean.

const isSomeName = niz.every((name) => name.length === 9);
console.log(isSomeName);

const check = (arr) => {
  for (i of arr) {
    if (i.length === 7) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};
console.log(check(niz));

// find() metoda vraca vrednost prvog elementa koji je prosao test f-je.

const brojevi = [4, 9, 16, 25, 29];

// Koji je prvi element niza veci od 18?

const findElement = brojevi.find((el) => el > 18);
console.log(findElement);

// Ako nijedan element nije zadovoljio uslov find metoda vraca undefined.

const findElement1 = brojevi.find((el) => el > 30);
console.log(findElement1);

// findIndex() metoda vraca index prvog elementa koji je zadovoljio uslov
// Ako nijedan element nije zadovoljio uslov findIndex() metoda vraca -1;

const indexElement = brojevi.findIndex((el) => el > 18);
console.log(indexElement);

const indexElement1 = brojevi.findIndex((el) => el > 50);
console.log(indexElement1); // -1

const nestoPojmaNemam = Array.from("ABCDE");
console.log(nestoPojmaNemam);

// // duplikat
// const nadjiDuplikate = (arr) => {
//   let noviniz = [];
//   for (i = 0; i < arr.length; i++) {
//     for (k = 0; k < arr.length; k++) {
//       if (arr[i] === arr[k]) {
//         fali nesto
//       }
//     }
//   }
//   return noviniz;
// };
// console.log(nadjiDuplikate(["Miona", "Bakir", "Miona"]));

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

let o = ["st", "nd", "rd", "th"];

const newArr = color.map((element, index) => {
  if (index === 0) {
    return `1 + ${o[index]}` + ` choice is ${element}`;
  } else if (index === 1) {
    return `2 + ${o[index]} ` + ` choice is ${element}`;
  } else if (index === 2) {
    return `3 + ${o[index]} ` + ` choice is ${element}`;
  } else {
    return `${index + 1} ` + ` ${o[3]} choice is ${element}`;
  }
});
console.log(newArr);

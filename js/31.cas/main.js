// indexOf() metoda vraca poziciju elementa koji predstavlja argument date metode.
// ako indexOf() metoda ne pronadje element vraca -1

const niz = ["Hatidza", "Bakir", "Amer", "Bakir", "Alen"];

const bakir = niz.indexOf("Bakir");
console.log(bakir);

const Omar = niz.indexOf("Omar") === -1 ? "nije dolazio" : niz.indexOf("Omar");
console.log(Omar);

// 2 argument krece od pozicije koju upisemo
const Hatidza = niz.indexOf("Hatidza", 1);
console.log(Hatidza);

// lastIndexOf() metoda vraca poslednju poziciju elementa koji predstavlja argument date metode.
// ako lastIndexOf() metoda ne pronadje element vraca -1

const lastBakir = niz.lastIndexOf("Bakir");
console.log(lastBakir);

// Array.from() meotda nam varca niz, koji se pravi od nekog objekta koji ima length.

const nozinizz = Array.from("SVAKO SLOVO CE BITI POSEBAN ELEMENT NIZA");
console.log(nozinizz);

// includes() metoda vraca boolean u zavisnosti da li je element nalazi u nizu.

console.log(niz.includes("Emin")); // false

// keys() metoda vraca Array Iterator Object sa kljucevima (indexima) nekog niza.

const indexi = niz.keys();
console.log(indexi);

for (index of indexi) {
  console.log(index);
}

// entries() metoaoa Array Iterator Object sa key/valie parovima nekog niza.

const entries = niz.entries();
console.log(entries);

for (index1 of entries) {
  console.log(index1);
}

// zadatak -
function vrati(niz, n) {
  let nozinizz = [];
  if (n > niz.length) {
    return niz;
  } else if (n === undefined) {
    return niz[0];
  } else {
    nozinizz = niz.slice(0, n);
  }
  return nozinizz;
}
console.log(vrati([5, 6, 7], 2)); // vraca 5 i 6
console.log(vrati([5, 6, 7])); // vraca prvi element
console.log(vrati([5, 6, 7], 2700)); // vraca ceo niz

// 1. Write a simple JavaScript program to join all elements of the following array into a string where is * between elements.
const nizz = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nizz.join("*"));

// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8

// function niz2(broj) {
//   let brojj = broj.toString(); // ne treba pretvarati u string (ne cita nulu!!!)
//   let novibroj = "";
//   for (i = 0; i < brojj.length; i++) {
//     if (brojj[i] % 2 === 0 && brojj[i + 1] % 2 === 0) {
//       novibroj += brojj[i] + "-";
//     } else {
//       novibroj += brojj[i];
//     }
//   }
//   return novibroj;
// }
// console.log(niz2(025468));

// 2.nacin -->

const addSomething = (num) => {
  let newNum = "";
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
      newNum += num[i] + "-";
    } else {
      newNum += num[i];
    }
  }
  return newNum;
};
console.log(addSomething("025468"));

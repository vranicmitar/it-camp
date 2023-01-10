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

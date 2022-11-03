let recenica = "Danas cemo raditi neke operacije sa stringovima";
console.log(recenica);
// console.log(typeof recenica);
let omar = "Omar";

// Pristupanje nekom karakteru stringa se vrsi preko indexa.
// Indeksiranje ide od !!!
// U SVAKOM INDEKSIRAJUCEM OBJEKTU, POSLEDNJI KARAKTER IMA INDEX:
// (ukupna duzina stringa) - 1 !!!

console.log(omar[0]);
console.log(omar[2]);

// Metoda za racunanje duzine stringa je lenght -->

let duzinaRecenice = recenica.length;
console.log(duzinaRecenice);
console.log(omar.length);

// Primer --> Za svaki karakter neke recenice neka se ispise jedan ispod drugog.
// Kod ovakvih zadataka iterator pred. index pomocu kojeg pristupamo karakteru stringa.

recenica = "Danas cemo raditi neke operacije sa stringovima";
const duzina = recenica.length;
for (let i = 0; i < duzina; i++) {
    console.log(recenica[i]);
}

// Na osnovu unete recenice od strane korisnika ispisati recenicu tako da svaki karakter ide 1 ispod drugog.
// Dok ako je neki karakter = "a", neka se ispise broj 5 a u slucaju da je karakter jednak "s" neka se ne ispise nista.

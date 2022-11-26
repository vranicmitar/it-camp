// STRINGOVI //
// Stringovi su immutable vrednosti (nepromenljive) sto znaci da ako hocemo neki slican string da dobijemo moramo napraviti novi

// METODE --->

// Metode (funkcije koje primenjujemo za datu pormenljivu)...
// lentgth - metoda nam sluzi za dobijanje duzine stringa.

const recenica = "Kamerun dobijamo!";
console.log(recenica.length);

// Pristupanje odredjenom karakteru ide preko indexa.
// Indeksiranje ide od 0 do (ukupna duzina stringa - 1)

console.log(recenica[16]);

// Koriscenje \ (backslash) karaktera.

// String zapisujemo na 3 nacina:
// 1. " "
const string1 = "Danas je lepo vreme.";
// const string1 = "Danas je 'lepo' vreme.";
// \:
const string2 = "Danas je \"lepo\" vreme.";
// 2. ' '
const string3 = 'Danas je lepo vreme.';
// 3. ` `
const string4 = `Danas je lepo vreme.`;

// \ (primena) na kraju reda:
const string5 = "dsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd \
dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd."
console.log(string5);
// sa \ ne mozemo nastaviti liniju koda vec samo string.
// \n prikazivanje stringa:

const string6 = "dsddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd."
console.log(string6);

// Postoje 3 metode za ekstraktovanje stringa:
// 1. slice (start, end); ima negativno pristupanje (moze uzeti unazad string)
// 2. substring (start, end) ima pozitivno pristupanje
// 3. substr (start, lenght)

// Racunanje ide od 0.

const string7 = "Danas je lepo vreme.";
console.log(string7.slice(0,5));
console.log(string7.slice(-6,-1));

console.log(string7.slice(5,10));



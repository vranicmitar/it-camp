// Date Objects //

// Kreiranje datuma //

// Kreiranj ese vrsi preko new keyword

// Kreiranje datuma mozemo izvrsiti na 4 nacina :

// 1. new Date()

const trntVreme = new Date();
console.log(trntVreme);

// 2. new Date(year, month, day, hours, minutes, seconds, miliseconds);
// meseci se racunaju od 0 do 11 !!!
// Ako pravimo datum na pvaj nacin, moramo imati min 2 argumetna a max 7;
const datumRdodjenja = new Date(2002, 11, 6, 23, 56, 23, 58);
let datum = new Date(2013, 7);
console.log(datum);

// 3. Slanjem jednog argumenta unutar Date().
// Ovako napravljen datum je zaparavo dodat broj milisekundi na 1.1.1970T00:00:00:milisekunda

datum = new Date(2022);
console.log(datum);

// 4. Slanjem stringa u Date() ako argumetn.String ce biti parse-ovan i dobicemo datum na osnovu toga.

datum = new Date("2017 Jan 25");
console.log(datum);

// Jedna i dve cifre godine ce biti interpretuirane kao:
// 19xx ili 190x.

datum = new Date(86, 0);
console.log(datum);

datum = new Date(6, 0);
console.log(datum);

// Date.now() - je metoda koja nam peikazuje broj milisekundi od 1.1.1970 do trenutnog vremena.
const datum2 = Date.now();
console.log(datum2);

// Date.parse(nekiDatum) - nam vraca broj milisekundi od 1.1.1970 do poslatog Datuma.
console.log(Date.parse(datumRdodjenja));

// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

function racunajBrojDana(prviDatum, drugiDatum) {
  let prvi = new Date(prviDatum);
  let drugi = new Date(drugiDatum);
  let razlika = drugi - prvi;
  let ukupnoDana = razlika / (1000 * 3600 * 24);
  return `Razlika izmedju dva uneta datuma je ${ukupnoDana} dan`;
}
console.log(racunajBrojDana("1999-05-24", "2004-09-15"));

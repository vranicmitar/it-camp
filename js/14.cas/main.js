// replace() metoda vrsi zamenu nekoliko karaktera datog stringa.Ima dva argumenta.
// Po defaultu replace() metoda menja samo first match datog stringa.

const recenica = "Danas smo podelili sertifikate za HTML,CSS i JS";

let recenica2 = recenica.replace("Danas","Juce");

console.log(recenica2);
// Za promenu svih pronalazenja datog stringa cemo koristiti Regular Expressions:
// 1. g (global)

recenica2 = recenica.replace(/s/g,"t");
console.log(recenica2);

// 2. i (insensitive)

recenica2 = recenica.replace(/s/i,"A");
console.log(recenica2);

// Koriscenje (g) i (i);
recenica2 = recenica.replace(/s/gi,"A");
console.log(recenica2);

// toUpperCase() metoda za pretvaranje celog stirnga u velika slova.

console.log(recenica.toUpperCase());

// toLowerCase() metoda za pretvaranje celog stirnga u velika slova.

console.log(recenica.toLowerCase());

// concat() vrsi spajanje sva ili vise stringova

let a = "Danas je 16. cas JS.";
let b = "Bice JS i preko 50 csaova.";
let c = a +" "+ b; // losa praxa bez koriscenja concat metode
console.log(c); 

c = a.concat(b);
console.log(c); 

c = a.concat(" ", b , "\nNakon toga cemo raditi react biblioteku.");
console.log(c);

// NAPOMENA --> Sve string metode prave novu promenljivu (jer su stringovi immutable vrednosti).

// Napraviti funkciju koja kod stringa koji pred. argument f-je ispituje sledece:
// - ako dati string ima vecu duzinu od 9:
   // - pravi novi string koji ce biti isecak od pola do kraja originalnog stringa.
   // - nakon toga menjamo mala slova a sa B i  funkcija ce vratiti novi string koji je sastavljen od "Ovo je novodobijena recenica," i poslednjeg izmenjenog isecka.
// - Ako string ima duzinu manju od 9 : f-ja treba vratiti poruku:
// argument + {njena duzina} + "nedovoljno za dalje ispitivanje"

const mojaFunkcija = function(recenica) {
    if(recenica.length > 9) {
        let polaDuzine;
        // if (recenica.length % 2 === 0) {
        //     polaDuzine = recenica.length / 2;
        // } else if (recenica.length % 2 !== 0) {
        //     polaDuzine = Math.ceil(recenica.length / 2)
        // }
        polaDuzine = recenica.length % 2 === 0 
        ? recenica.length / 2 
        : Math.ceil(recenica.length / 2);
        const isecak = recenica.slice(polaDuzine, recenica.length);
        const novarecenica = isecak.replace(/a/g, "B");
        const konacno = "Ovo je novodobijena recenica,".concat(novarecenica);
        return konacno;
    } else {
        const recenica2 = recenica.concat(recenica.length, "nedovoljno za dalje ispitivanje.");
    } return recenica2;
}

console.log(mojaFunkcija("Kraj casa"));
console.log(mojaFunkcija("Kraj 2 casa rada sa stringovima"));


// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const funkcija = function() {
    const recenica = prompt("Unesite neku recenicu: ");
    let duzina = recenica.length;

    let nova1 = recenica.toLocaleUpperCase();
    let nova2 = recenica.toLocaleLowerCase();

    polaDuzine = recenica.length % 2 === 0 
        ? recenica.length / 2 
        : Math.ceil(recenica.length / 2);
    let isecak1 = recenica.substr(0, polaDuzine).toUpperCase();
    let isecak2 = recenica.substr(polaDuzine, duzina).toLowerCase();
    let nova3 = recenica.replace(/skola/gi, "fakultet");
    let nova4 = recenica.slice(0, 10);

}

console.log(funkcija());
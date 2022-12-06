// search() metoda nam daje poziciju (index) nekog stringa (argumenta metode);

const recenica = "Desila se neocekivana poseta.";
const position = recenica.search("poseta");
console.log(position);


// Razlike izmedju indexOf() i  search() metode -->
// - indexOf() metoda dozvoljava drugi argument (pozicija odakle krece trazenje stringa);
// - serach() metoda dozvoljava Regular Expressions;

const recenica1 = "Danas su pocela cetvrtfinala svetskog prvenstva u fudbalu,danas je takodje bila dodela sertifikata.";

const position2 = recenica1.search(/danas/i);
const position3 = recenica1.search("danas");

console.log(position2);
console.log(position3);

// match() metoda nam vraca niz.


const matchingDanas = recenica1.match("danas");
console.log(matchingDanas);


const matchingDanas2 = recenica1.match(/danas/gi);
console.log(matchingDanas2);


// includes() metoda nam vraca boolean u zavisnosti od toga ada li se argument nalazi u stringu na koji primenjujemo metodu.

const boolean = recenica1.includes("Omar");
console.log(boolean);

const boolean1 = recenica1.includes("danas");
console.log(boolean1);

// includes() metoda dozvoljava drugi argument sto zapravo predstavlja poziciju od koje ce se traziti dati string.

const boolean3 = recenica1.includes("danas", 60);
console.log(boolean3);

// startsWith() i endsWith() metode nam vracaju boolean od toga da li dati string pozinje (zavrasva) argumentom metode.


const start = recenica1.startsWith("danas");
console.log(start);  // rezultat je false

const ends = recenica1.endsWith(".")
console.log(ends);  // rezultat je true

// JavaScript Template Literals -->

// ** Bolja praksa je koristiti `` za pisanje stringa.

// Prednosti :
// 1. mozmeo kostistiti navodnike (obicne ili duple) unutar stringa.
const recenica3 = `Neki "dobri" ljudi.`
// 2. template literals dozvoljava multiline stringove.
const recenica5 = `eforgpjmreg
regojgrepgjre
ireojrgijreg
igeijogejogr`;
// 3. Interpolacija - omogucava laksi nacin interpolacije promenljivih ( ili izraza ) unutar nekog stringa.
let a = 5;
let b = 34;

const recenica6 = `Jedna falsa ima zapreminu ${a} litara, a ukupna kolicina limunade je
${b}l stoga mozemo napuniti ${Math.floor(b/a)}l flasa limunade`;

console.log(recenica6);


// Napisati funkciju koja ispituje argument.
// Ako se u recenici nadje skola neka se vrati pozicija prvog pojavljivanja date reci.
// Ako recenica pocinje sa recju "Automobil" neka se vrati boolean true.
// Ako je recenica parne duizne neka se vrati broj pojavljivanja reci "kuca".

// function zadatak(recenica) {
//     const search = recenica.search(/skola/gi);
//     const vrati = recenica.startsWith("Automobil");
//     let duzina = recenica.lenght;
//     if (duzina % 2 === 0) {
//         const match = recenica.match("kuca")
//     }
// }

// console.log(zadatak("Automobil"))

function task(recenica) {
    if (recenica.includes("skola")) {
        return recenica.indexOf("skola")
    } else if(recenica.startsWith("Automobil")) {
        return true;
    } else if (recenica.length % 2 === 0) {
        let brojac = 0;
        if (recenica.includes("kuca")) {
            for (i = 0; i <= recenica.length - 1; i++) {
                if (recenica.indexOf("kuca") === i) {
                    brojac++;
                }
            }
        }
    } 
    return `Broj pojavljivanja unutar reci "kuca" unutar datog stringa je ${brojac}`;
}

console.log(task("skola je uticala da Alen i Hatidza spavaju za vreme casa"));
console.log(task("Automobil"));
console.log(task("Ja zivim u kuca"));



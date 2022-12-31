// NIZOVI
// Niz predstavlja strukuytru podataka koja moze sadrzati vise od jedne vrednosti.

// Nizovi u JS su heterogeni (mogu sadrzati elemente razlicitih tipova).
const niz = ["Mitar", "Vranic", 20, true];
console.log(niz);
// Dozvoljeno j , cesto i prakticnije pisati svaki element niza u novom redu.
// Mozemo kreirati prazan niz pa nakon toga dodavati rucno elemente.

const automobil = [];

automobil[0] = "Audi";
console.log(automobil);
automobil[1] = "Pasat";

automobil[5] = "Golf";
console.log(automobil);

console.log(automobil[3]); // undefined

// Istu sintaksu mozemo iskoristiti za preomnu vrednosti.

automobil[0] = "Mercedes";
console.log(automobil);

// Niz mozemo definistai preko New keyworda

const niz2 = new Array("Hasan", "Omar", "Emin");
console.log(niz2);

// Radi jednostavnosti,citljivosti koda i brzine izvrasavanja je bolje koristiti [] nego new.

const niz3 = [40];
console.log(niz3);
// New Array ce napraviti niz od 40 praznih mesta !!! NEDOSTATAK -->
const niz4 = new Array(40);
console.log(niz4);

// Pristupanje se vrsi preko indexa.
console.log(automobil[1]);

// Postoje dva nacina za proveravanje da li je neka promenljiva niz
console.log(typeof automobil); // object

// 1.Array.isArray(potencijalniNiz);

console.log(Array.isArray(automobil)); // vraca boolean true

// 2.instanceof Array(potencijalniNiz)

console.log(automobil instanceof Array); // true vraca

// Elementi niza mogu biti koje vrednosti :

// Date,Array,Boolean,Fuction,Number...

// Za preovreu duzine niza koristimo length -->
console.log(automobil.length);

// Za dodavanje na kraju elementa niza koristimo push() metodu.

const dani = ["ponedeljak", "utorak"];
dani.push("sreda");
console.log(dani);

// psuh() metoda nam dozvoljava dodavanje vise od jendog elementa na kraju niza.
dani.push("cetvrtak", "petak");
console.log(dani);

// dani.push(...) vraca nozu duzinu niza.
console.log(dani.push("cetvrtak", "petak"));

dani[dani.length] = "subota";
console.log(dani);

// Nizovi su zapravo vrsta obejkata koji imaju brojevne indexe.

// Za pretvaranje niza u string mozemo iskortistit dve metode :

// toString()
// join()

// 1.
const daniStr = dani.toString();
console.log(daniStr);
console.log(typeof daniStr);

// Obrnuti postupak
const noviniz = daniStr.split(",");
console.log(noviniz);

// 2.
// KLasnican primer;
const daniStr2 = dani.join();
console.log(daniStr2);
console.log(typeof daniStr2);

// Dobijanje stringa i stavljanje nekog znaka izmedju elementa niza koji smo pretvorili u string

const daniStr3 = dani.join("*");
console.log(daniStr3);

// pop() metoda brise poslednji element iz niza.
//
const subota = dani.pop();
console.log(dani);
console.log(subota); // nam vraca zapravo izbrisani element

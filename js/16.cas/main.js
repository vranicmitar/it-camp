// Split metoda nam vraca niz na osnovu strniga na koji je primenjen.

const recenica = "Ovde je prilicno hladno, ali smo dobili obecanje da ce uskoro pooceti grejanje.Ako se to ne desi, bice odlaganja casova."
const niz = recenica.split();
console.log(niz);

// Ako se kod split() metode izostavi argument dobicemo niz od jednog elementa.

const niz2 = recenica.split(",");
console.log(niz2);

const niz3 = recenica.split("*");
console.log(niz3);

// Napraviti niz od stringa,tako da se elementi niza prave do svake reci  " decembar ".Rec  " decembar " ne sme biti deo nijednog elementa niza.

const recenica1 = "Decembar je poslednji mesec u godini.U decembar pocinje zima,decembar je najhladniji mesec u godini.";
const nizz = recenica1.split(/decembar/gi);
console.log(nizz);

// Search metode:

// indexOf() metoda - nam vraca poziciju gde zapravo pocinje poslati argument (jedan ili vise karaktera) kada se radi o nekom stringu.

const pozicija = recenica1.indexOf("j")
console.log(pozicija);

const pozicij2 = recenica1.indexOf("mesec");
console.log(pozicij2);

// AKO TRAZIMO POZICIJU NEPOSTOJECEG STRINGS UNUTAR RECENICE REZULTAT JE BROJ -1 !!!
const pozicij3 = recenica1.indexOf("Omar");
console.log(pozicij3);

// Drgu argument nam predstavlja poziciju od  koje krecemo sa trazenjem stringa.

const pozicij4 = recenica1.indexOf("mesec",30);
console.log(pozicij4);

// lastIndexOf() - nam vraca poslednju poziciju gde se zapravo nalazi poslednji argument kada se radi o stringu
// AKO TRAZIMO POZICIJU NEPOSTOJECEG STRINGS UNUTAR RECENICE REZULTAT JE BROJ -1 !!!


const pozicij5 = recenica1.lastIndexOf("mesec");
console.log(pozicij5);


// Napraviti funkciju koja na osnovu parametra ispituje pojavljivanje reci "ko osvaja".
// Ako se pojavljuje vise puta dati string,vratiti poziciju prvog i poslednjeg ponavljanja,ako se pojavljuje jednom,vratiti poziciju pojavljivanja
// dok ako se ne pojavljuje dati string vratiti poruku: "Nismo pronasli dati string";

function position(sentence) {
    const firstApp = sentence.indexOf ("ko osvaja");
    const lastApp = sentence.lastIndexOf ("ko osvaja");
    if (firstApp === -1) {
        return "Nismo pronasli dati string"
    } else if (firstApp === lastApp) {
        return "Reci 'ko osvaja' se nalaze jednom u datoj recenici";
    } else if (firstApp !== lastApp) {
        return "Prvo pojavljivanje reci ko osvaja se nalazi na " + firstApp + "poziciji.\nPoslednje pojavljivanje reci 'ko osvaja' se nalazi na " + lastApp + "poziciji";
    }
}

console.log(position("ko osvaja svetsko.Stvarno ko osvaja?"))
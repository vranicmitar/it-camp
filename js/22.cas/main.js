// JS Number metode -->

// toString() metoda pretavara broj u string.
// Ova metoda pretvara bilo koi tip podataka u string.

let x = 22;
console.log(x);
console.log(typeof x);
let y = x.toString();
console.log(y);
console.log(typeof y);
console.log(y+x);

// toExponential() - nam vraca string broja zaokruzen onoliko decimala, koliki je argument metode.

let z = 55.478;
let w = z.toExponential(2);
console.log(w);
console.log(typeof w);

// toFixes() - vraca string broja koji ce biti zaokruzen na onoliko decimala koliki je zapravo argument.

let a = 12.1234;
let b = +a.toFixed(2);
console.log(b);
console.log(typeof b);

// toPrecision() metoda vraca string broja,sa onoliko cifaara koliki je argument f-je.

let c = 12.1234;
let d = +c.toPrecision(3);
console.log(d);
console.log(typeof d);

// valueOf() metoda vraca vrednost neke pormenljive.

console.log(+c.valueOf());

// NAPOMENA -->
// toString() i valueOf() metode vaze za sve tipove podataka u JS.

// 1.Napraviti funkciju koja prima jedan argument (broj) i vraca nam poruku da li je dati argument palindrom.

function palindrom (broj) {
    let broj1 = broj.toString();
    let novibroj = "";
    for (i = broj1.length - 1; i >=0; i--) {
        novibroj += broj1[i];
    } 
    if (broj1 === novibroj) {
        return "Dati broj jeste palindrom"
    } else {
        return "Dati broj nije palindrom"
    }
}
console.log(palindrom(12321)); // jeste plaindrom
console.log(palindrom(1234)); // nije plaindrom

// Napravit f-ju koja ocekuje trocifreni broj,a vraca dvocifreni broj(iskljuci cifru desetica);

function trocifreniBroj(broj) {
    let duzina = broj.toString().length;
    let stringBroja = broj.toString();
    if (duzina !== 3) {
        return `Argument mora imati 3 cifre`;
    } else {
        let novistring = stringBroja.replace(stringBroja[1], "")
        return +novistring;
    }
}
console.log(trocifreniBroj(123));

// Domcai zadatak - Napraviti f-ju koja ocekuje cetvorocifreni broja vraca broj kojem su zamenjene prva i treca cifra i druga i cetvrta.

// GLOBAL JS metode // 
// Globalne metode mogu biti promenjene na bilo koji tip podataka.

// Predstavicemo 3 najcesce koriscene metode sa brojevima.

// 1.Number() - vraca broj konvertovan iz argumenta.

console.log(Number("23"));
console.log(typeof Number("23"));

// Krajni razmaci ne prave problem.
console.log(Number("        23    ")); // number
console.log(typeof Number("23")); // number


console.log(Number("23 + 5")); // NaN
console.log(typeof Number("23"));

// Razmaci nisu dozvojeni kod Number() merode
console.log(Number("23 500")); // NaN
console.log(typeof Number("23")); // number
console.log(Number("23,4")); // NaN
console.log(Number("23.4")); // 23.4

console.log(Number("abv")); // NaN

console.log(Number(true)); // 1
console.log(Number(false)); // 0

console.log(Number([])); // 0
console.log(Number({})); // NaN


function domaci (broj) {
    let stringBroja = broj.toString();
    if (stringBroja.length !== 4 || isNaN(stringBroja)) {
        return `Argument mora imati 4 cifre`
    } else {
        let prviDeo = stringBroja.slice(0,2);
        let drugiDeo = stringBroja.slice(2);
        let novibroj = drugiDeo.concat(prviDeo);
        return +novibroj;
    }
}

console.log(domaci(4752));  // rezultat je 5247


// 2.parseInt() - analizira argument i vraca nam ceo broj ako je moguce.

        console.log(parseInt("23")); // 23
        console.log(typeof parseInt("23")); //

        // Krajni razmaci ne prave problem.
        console.log(parseInt("        23    ")); // number
        console.log(typeof parseInt("23")); // number


        console.log(parseInt("23 + 5")); // 23
        console.log(typeof parseInt("23"));

        // Razmaci jesu dozvojeni kod parseInt() metode stim sto se uzima u obzir smao prvi broj koji se pojavljuje
        console.log(parseInt("23 500")); // 23
        console.log(parseInt("REC23 50")); // NaN
        console.log(parseInt("23,4")); // 23
        console.log(parseInt("23.4")); // 23 (odstranjuje decimalni ostatak kao Math.trunc)

        console.log(parseInt("abv")); // NaN

        console.log(parseInt(true)); // NaN
        console.log(parseInt(false)); // NaN

        console.log(parseInt([])); // NaN
        console.log(parseInt({})); // NaN


// 3.parseFloat() - analizira argument i vraca decimalni broj sa zapisom ako ga ima..

console.log(parseFloat("23")); // 23
console.log(typeof parseFloat("23")); //

// Krajni razmaci ne prave problem.
console.log(parseFloat("        23    ")); // number
console.log(typeof parseFloat("23")); // number


console.log(parseFloat("23 + 5")); // 23
console.log(typeof parseFloat("23"));

// Razmaci jesu dozvojeni kod parseFloat() metode stim sto se uzima u obzir smao prvi broj koji se pojavljuje
console.log(parseFloat("23.25 500")); // 23.25
console.log(parseFloat("REC23 50")); // NaN
console.log(parseFloat("23,4")); // 23
console.log(parseFloat("23.4")); // 23.4 (odstranjuje decimalni ostatak kao Math.trunc)

console.log(parseFloat("abv")); // NaN

console.log(parseFloat(true)); // NaN
console.log(parseFloat(false)); // NaN

console.log(parseFloat([])); // NaN
console.log(parseFloat({})); // NaN

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


function domaci(broj) {
    let broj1 = broj.toString();
    let novibr = "";
    for (let i = 0; i < broj1.length; i++) {
      if (broj1.length !== 4) {
        return `Argument mora imati 4 cifre`
      } else if (i % 2 === 0) {
        novibr += broj1[i + 2];
      } else if (i % 2 !== 0) {
        novibr += broj1[i - 2];
      }
    }
    return novibr;
  }
console.log(domaci(1234));
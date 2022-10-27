// 1.zadatak

let a = +prompt("Unesite prvi broj: ");
let b = +prompt("Unesite drugi broj: ");

if( a === b ) {
    let  kvadrat = a**2;
    console.log(kvadrat);
} 
else if(a !== b) {
    let pravougaonik = 2*(a + b);
    console.log(pravougaonik);
}
else {
    console.log("Niste uneli brojeve");
}

// 2.zadatak

let x = +prompt("Unesite x: ");
let y = +prompt("Unesite y: ");
if (y !== 0) {
    let kolicnik = x/y;
    console.log(kolicnik);
}
else {
    console.log("Deljenje nije moguce");
}



// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.
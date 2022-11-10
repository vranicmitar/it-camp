// 1. Kvadrat broja

let a = +prompt("Unesi neki realan broj: ");

if (isNaN(a)) {
    console.log("Unesli ste nepozeljan broj.")
} else {
    console.log("Kvadrat broja je:" +" "+ a**2);
}

// 2.Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:

// -ako je broj deljiv sa 3,potrebno je ispisati "FIZZ" umesto tog brojac;
// -ako je broj deljiv sa 5,potrebno je ispisati "BUZZ" umesto tog brojac;
// -ako je broj deljiv sa 3 i 5 ,potrebno je ispisati "FIZZ BUZZ" umesto tog brojac;

for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZ BUZZ");
    } else if (i % 3 === 0) {
        console.log("FIZZ");
    } else if (i % 5 === 0) {
        console.log("BUZZ");
    }
}

// 3.

const recenica = "Danas je ponedeljak, a sutra utorak";
let duzina = recenica.length;
let novaRecenica = ""
for (a = 0; a < duzina; a++) {
    if(recenica[a] === "a" || recenica[a] === "e" || recenica[a] === "i" || recenica[a] === "o" || recenica[a] === "u" )
    {
        novaRecenica += recenica[a].toUpperCase();
    }
    else if (recenica[a] === "") {
    novaRecenica += ".";
}
 else {
novaRecenica += recenica[a];
}
}

console.log(novaRecenica);

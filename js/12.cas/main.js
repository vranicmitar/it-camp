// Funkcije u JS pred. blok koda koji se izvrsava koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem :
// 1. function keyword-a,
// 2. arrow function sintakse.

// 1. function keyword -->

// Pravimo funkciju koja sabira broj 3 i 5:

function zbir() {
    const zbir = 3 + 5;
    return zbir;
    // sve nakon returna ne vazi...
}
console.log(zbir());

// Pravimo funkciju koja sabira dva broja:

function zbirDvaBroja(par1, par2) { // par1 i par2 predstavljaju parametre funkcije
    return par1 + par2;
}

console.log(zbirDvaBroja(5,55)); // 5 i 55  predstavljaju argumente funkcije

// Napravi funkciju koja vraca zbir kvadrata dva broja koja pred. argumente

function zbirbrojeva(par3, par4) {
    return par3**2 + par4**2;
}
console.log(zbirbrojeva(5,5));
// console.log(zbirbrojeva(5)); --> NaN

// Defaultna vrednost nekog parametra:
// Napravi funkciju koja vraca zbir kvadrata dva broja ako se izostavi drugi argument funkcija ga racuna kao 0...

// 1.nacin

function zbirkv2(a, b) {
    if (b === undefined) {
        return a**2;
    } else {
        return a**2 + b**2;
    }
}
console.log(zbirkv2(2, 3)); // vraca 13
console.log(zbirkv2(2)); // vraca 4

// 2.nacin
// Defaultne vrdnosti se stavljaju na KRAJU!!!!
// Ne moze neka defaultna vrednost biti definisana pre obavezne!

function zbirkv3(a, b=0) {
    return a**2 + b**2;
}

console.log(zbirkv3(5, 5)); // rezultat 50
console.log(zbirkv3(5)); // rezultat 25


// Jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickaVrednost = function(par1 = 1, par2 = 1, par3 = 1) {
    return (par1 + par2 + par3) / 3;
};

console.log(aritmetickaVrednost(4, 5, 3)); // rez 4
console.log(aritmetickaVrednost(4, 5));  // rez 3.3
console.log(aritmetickaVrednost()); // rez 1

// Napravite funkciju povrsina koja uzima 2 vrednosti.

const povrsina = function(a, b) {
    if (a === b) {
        return "Povrsina kvadrata iznosi " + a**2;
    } else {
        return "Povrsina pravugaonika iznosi " + a * b;
    }
};
console.log(povrsina(4, 6));
console.log(povrsina(4, 4));






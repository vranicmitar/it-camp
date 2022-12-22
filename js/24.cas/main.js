// JavaScript Math Object //

// Math Objekat nam dozvoljava da izvrsimo neke dodatne radnje sa brojevima.

// Math Properties (Konstante)

// Sintaksa je Math.Property.

// Math konstanti ima 8 : 

// 1.
// Math.E - vraca Ojlerov broj
console.log(Math.E);

// 2.
// Math.PI - varca vrednost Pi
console.log(Math.PI);

// 3.
// Math.SQRT2 - varca vrednost kvadrtanog korena broja 2
console.log(Math.SQRT2);

// 4.
// Math.SQRT1_2 - varca vrednost kvadratnog korena 1/2
console.log(Math.SQRT1_2);

// 5.
// Math.LN2 - varca vrednost logartima osnove e broja 2
console.log(Math.LN2);

// 6.
// Math.LN10 - varca vrednost logartima osnove e broja 10
console.log(Math.LN10);

// 7.
// Math.LOG - varca vrednost 2 broja e
console.log(Math.LOG2E);

// 8.
// Math.LOG10E - varca vrednost logartima osnove 10 broja e
console.log(Math.LOG10E);


// Math Methods //

// Sintaksa je : 
// Math.method(number).

// Number to Integer : 

// 1. Math.round() - vraca blizi ceo broj 

console.log(Math.round(22.23));
console.log(Math.round(22.74));

// 2. Math.ceil() - vraca sledeci broj

console.log(Math.ceil(46.23));
console.log(Math.ceil(-46.23));

// 3.Math.floor() - vraca prethodni broj

console.log(Math.floor(46.23));
console.log(Math.floor(-46.23));

// 4.Math.trunc() - otklanja decimalni ostatak

console.log(Math.trunc(58.23));
console.log(Math.trunc(-58.23));


// Math.sign(numbver) - vraca -1, 0 ili 1 u zavisnosti od toga kog je znaka broj.

console.log(Math.sign(56));
console.log(Math.sign(-28));
console.log(Math.sign(0));

// Math.pow(number, power) - vraca number stepenovan na power

console.log(Math.pow(2,15)); // 2**15

// Math.sqrt(number) - vraca kvadratni koren broja number

console.log(Math.sqrt(2));

// Math.abs(number) - vraca absolutnu vrednost broja number

console.log(Math.abs(2));
console.log(Math.abs(-2));

// Math.sin(number) - vraca vrednost sinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.

console.log(Math.sin(0));
console.log(Math.sin(Math.PI/2));

// Math.cos(number) - vraca vrednost kosinusa (izmedju -1 i 1). Argument se posmatra kao vrednost u radijanima.

console.log(Math.cos(0));
console.log(Math.cos(Math.PI/2));


// 32. Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

// Ponovni zadatak 

const blizi100 = (num1,num2) => {
    const razlika1 = Math.abs(100 - num1)
    const razlika2 = Math.abs(100 - num2)
    const bliziBroj = razlika1 > razlika2 ? num2 : razlika1 < razlika2 ? num1 : null

    if(bliziBroj === null) {
        return `Brojevi su jednako udaljeni od broja 100`;
    } else {
        return `Blizi je broj ${bliziBroj}`;
    }
}
console.log(blizi100(-150,40));
console.log(blizi100(-150,-150));
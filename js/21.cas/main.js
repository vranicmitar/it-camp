// JS prepoznaje samo jedan tip podataka za brojeve.U pitanju je number tip podataka i oni mogu biti zapisani sa ili bez decimalnog zareza. 

// Veliki brojevi mogu biti zapisazni tzv. exponent oznakom:

const petica = 5e6;
console.log(petica);

const novibr = 555e-5;
console.log(novibr);

// Sto se tice sabiranja decimalnih brojeva JS nije bas najbolji kalkulator.
const x = 0.1;
const y = 0.3;
const z = x+y;
console.log(z);

// + operator :

console.log("10" + 10);  // 1010 - tacno (tip podatka String)

console.log("10" - 2);  // 8 - tacno (tip podatka Number)

// NaN - Not a Number - je JS rezervisana rec koja ukazuje da broj nije korektan.
// NaN - je tipa Number !!!

// Za proveru da li je neka vrednost korektna broj se koristi !isNaN(). 

console.log(isNaN(100 / "Apple"));  // true

let a = 25;
let b = 0;
let c = -1;
// *Infinity (ili -Infinity) je vrednost koju cemo da dobijemo kada rezultat premasi  najveci broj u JS (bude veoma mali broj).
console.log(a / b);  // Infinity je rezultat
console.log(c / b);  // -Infinity je rezultat

// Infinity tip je Number!!!

// rgb(0, 255, 153)
// #12ab33
// rgb()


// Hexadecimal numbers: 
// Ako su brojevi ispisani prefiksom 0xFF rezultat ce biti 255;

let q = 0xFF;
console.log(q);

// Pored osnovnog nacina dodeljivanja vrednmosti nekoj promenljivoj mozemo to uraditi i preko new:

const k = 22;
const l = new Number(33); // nie dobra praxa
console.log(l);
console.log(l + k);

console.log(typeof(k));
console.log(typeof(l));  // prreko new keyword je tip Object...

// METODE SA BROJEVIMA --->

// Napraviti f-ju koja pretvara:

// 1. km u m
// 2. inch u cm

const km = (kilometar) => kilometar * 1000
console.log(km(5));

const inch = (i) => i * 2.54
console.log(inch(5));
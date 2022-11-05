// 1. Prebrojati i sabrati brojeve deljive sa 5 u intervalu od 1 do n
// const n = +prompt("Unesite neki broj:");
// let brojac = 0;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//     if (i % 5 ===0) {
//         brojac++;
//         sum +=i;
//     }
// }
// console.log("Ukupno ima " +brojac+ "cbrojeva deljivih sa 5,\n a njihova suma je:" +sum+ " .");

// 2. Neka se izvrsi iteracija od broja 99 do -99.Ispisati zbir brojeva deljivog sa 4 i broja 14.

for(let i =99; i>=-99; i--) {
    if (i % 4 ===0) {
        console.log(i+14);
    }
}
// II drugi nacin

let iterator = 99;
while (iterator > -100) {
    if (iterator % 4 ===0) {
        console.log (iterator + 14);
    }
    iterator--;
}

// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 3.Iteracija se vrsi od 3 do 17

let number = 3;
let counter = 0;
let sum = 0;
while (number < 18) {
    if (number % 3===0) {
        counter++;
        sum +=number;
    }
    number++;
}
console.log(sum/counter);
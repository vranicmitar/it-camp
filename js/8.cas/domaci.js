// 1.zadatak - Korisnik unosi dva broja.Na osnovu toga koji je broj manji iteracija se vrsi od njega do veceg broja.
// Izracunaj aritmeticku sredinu brojeva koji su deljivi sa 5.

let a = +prompt("Unesite prvi broj: ");
let b = +prompt("Unesite drugi broj: ");
let brojac = 0;
let sum = 0;

if (isNaN(a) || isNaN(b)) {
  console.log("Brojevi moraju imati korektne vrednosti.");
} else if (a < b) {
  while (a <= b) {
    console.log(a);
    a++;
  }
} else if (a > b) {
  while (b <= a) {
    console.log(b);
    b++;
  }
} else if (a === b) {
  console.log("Uneti brojevi moraju biti razliciti.");
}
while (number < 18) {
    if (number % 3===0) {
        counter++;
        sum +=number;
    }
    number++;
}
console.log(sum/counter);



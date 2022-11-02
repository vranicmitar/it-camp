// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

// Domaci zadaci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

let a = +prompt("Unesi prvi broj: ");
let b = +prompt("Unesi drugi broj: ");
let counter = 0;
let sum = 0;
if (isNaN(a) || isNaN(b)) {
    console.log("Brojevi moraju imati korektne vrednosti.");
  } else if (a < b) {
    while (a <= b) {
        if (a % 5===0) {
            counter++;
            sum +=a;
        }
        a++;
    }
    console.log(sum/counter)
  } else if (a > b) {
    while (b <= a) {
        if (b % 5===0) {
            counter++;
            sum +=b;
        }
        b++;
    }
    console.log(sum/counter)
  } else if (a === b) {
    console.log("Uneti brojevi moraju biti razliciti.");
  }
  

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.

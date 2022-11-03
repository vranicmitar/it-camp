// Задатак: Фудбалски терен
// Фудбалски терен димензија d×s треба оградити правоугаоном оградом тако да је растојање страница ограде
// од линије терена r. Напиши програм који одређује дужину ограде.
// Улаз: У три реда стандардног улаза налазе се три цела броја:
// • d - дужина терена у метрима (90 ≤ d ≤ 120)
// • s - ширина терена у метрима (45 ≤ s ≤ 90)
// • r - растојање ограде од терена у метрима (2 ≤ r ≤ 10)

const  duzina = +prompt("Unesi duzinu terena: ");
const  sirina = +prompt("Unesi duzinu terena: ");
const  rastojanje = +prompt("Unesi rastojanje od ivice terena i ograde: ");

if (isNaN(duzina) || isNaN(sirina) || isNaN(rastojanje)) {
  console.log("Unete vrednosti moraju biti brojevi");
} else if (duzina < 90 || duzina > 120) {
    console.log("Duzina mora biti izmedju 90 i 120");
}else if (sirina < 45 || sirina > 90) {
    console.log("Sirina mora biti izmedju 45 i 90");
}else if (rastojanje <2 || rastojanje > 10) {
    console.log("Ratojanje terena mora biti izmedju 2m i 10m");
}else {
  const obimTerena = 2 * duzina + 2 * sirina;
  const obimOgrade = obimTerena + 8 * rastojanje;
  console.log("Potrebno je " +obimOgrade+ "m za ogradjivanje terena");
}


// Domaci zadaci:
// 1.
// Korisnik unosi 2 broja:
// Na osnovu toga koji je broj manji, iteracija se vrsi od njega do veceg broja.
// Izracunati aritmeticku sredinu brojeva koji su deljivi sa 5.

// let a = +prompt("Unesi prvi broj: ");
// let b = +prompt("Unesi drugi broj: ");
// let counter = 0;
// let sum = 0;
// if (isNaN(a) || isNaN(b)) {
//     console.log("Brojevi moraju imati korektne vrednosti.");
//   } else if (a < b) {
//     while (a <= b) {
//         if (a % 5===0) {
//             counter++;
//             sum +=a;
//         }
//         a++;
//     }
//     console.log(sum/counter)
//   } else if (a > b) {
//     while (b <= a) {
//         if (b % 5===0) {
//             counter++;
//             sum +=b;
//         }
//         b++;
//     }
//     console.log(sum/counter)
//   } else if (a === b) {
//     console.log("Uneti brojevi moraju biti razliciti.");
//   }
  
  // 2.nacin -->

  let broj1 = +prompt("Unesi prvi broj: ");
  const broj1ZaIspis = broj1;
  let broj2 = +prompt("Unesi drugi broj: ");
  const broj2ZaIspis = broj2;
  let brojac = 0;
  let suma = 0;
  if (broj1 === broj2) {
    console.log("Uneti brojevi moraju biti razliciti");
  }
  else if (broj1 < broj2) {
    while (broj1 <= broj2) {
        if (broj1 % 5 ===0) {
            brojac++;
            suma += broj1;
        }
        broj1++;
    }
    console.log("Aritmeticka sredina brojeva, od broja" + broj1ZaIspis + "do broja" +broj2+ "iznosi" +suma/brojac+ ".");
  }else if (broj1 > broj2) {
    while (broj2 <= broj1) {
      if (broj1 % 5 ===0) {
          brojac++;
          suma += broj1;
      }
      broj2++;
  }
  console.log("Aritmeticka sredina brojeva, od broja" +broj2ZaIspis+ "do broja" +broj2+ "iznosi" +suma/brojac+ ".");
  }

// 2.
// Korisnik unosi broj iz intervala [12,16).
// Na osnovu unetog broja, iteracija se vrsi od njega do 1(ukljucujuci).
// Ispisati svaki broj iz iteracije, nljegov kvadrat i vrednost broja umanjenu za 25.


let broj = +prompt("Unesite neki broj iz intervala [12,16)");
const brojaZaPrikaz = broj;

for ( let broj; broj >= 1 ; broj--) {
  console.log(broj);
  console.log(broj**2);
  console.log(broj - 25);
}


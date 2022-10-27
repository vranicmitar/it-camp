// Ispisati prvih deset brojeva u konzoli, jedan ipsod drugog.
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10); NE PRAKTICNO

// Petlja (loop) - predstavlja nacin da se neki kod izvrsi (uz odredjene uslove) vise puta.

// for petlja - sintaksa:

// for(statement1; statement2; statement3) {
//     // kod za izvrsavanje u svakoj iteraciji
// }

// statement1 - predstavlja definisanje promenljive koja predstavlja iterator
// statement2 - predstavlja uslov (granicu) do koje vrednosti ce iterator da ide.
// statement3 - predstavlja povecanje ili smanjenje  iteratora koje se desi na kraju svake iteracije.

for (let i = 1; i <=10; i++) {
    console.log(i);
}

// Ispisati brojeve od 1 do 10,izuzev broja dva i broja 5.

// Prvi nacin -->

for (let i = 1; i < 11; i++) {
    if(i !== 2 & i !==5) {
        console.log(i);
    }
}

// continue keyword - ako se nadje u nekoj iteraciji, zapravo oznacava da se ta iteracija zanemari i da se nastavi dalje sa sledecom.

// Drugi nacin -->

for (let i = 1; i < 11; i++) {
    if (i === 2 || i ===5) {
        continue; // da se nista ne ispisuje
    } else {
        console.log(i);
    }
}
// break keyword - predstavlja da od tog trenutka for petlja prestaje sa radom.

// Ispisati sve brojeve od 1 do 10.Ako je neki broj deljiv sa 7 neka se prekine petlja.

for (let i = 1; i < 11; i++) {
    if (i % 7 === 0) {
        break;
    }
    else {
        console.log(i);
    }
}

// Ispis parnih brojeva od 1 do 20 na dva nacina : 

// Prvi nacin -->

for (let i = 1; i<=20; i++) {
    if (i % 2 ===0) {
        console.log(i);
    }
}

// Drugi nacin -->

for (let i = 2; i<=20; i += 2) {
        console.log(i);
}
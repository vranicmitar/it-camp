// Stringovi su immutable promenljive,nije moguce vrsiti modifikaciju postojeceg stringa.

// Alternativa je da napravimo novi string i tada je moguce dodavati vrednosti kad god pozelimo.

let rec1 = "Petak";
console.log(rec1[2]);

// toUpperCase() - metoda koja pretvara ceo string u velika slova.

let PETAK = rec1.toUpperCase();
// console.log(rec1.toUpperCase());
console.log(PETAK);


// toLowerCase() - metoda koja pretvara ceo string u mala slova.
let maliPetak = PETAK.toLowerCase();
console.log(maliPetak);

const recenica0 = "Zelimo DATu reCENIcu prikazATi MAlIm, isto Tako i VeLikim sloVIMa";

const recenica01 = recenica0.toLowerCase();
console.log("Recenica malim slovima ce biti ispisana: \n" + recenica01);
const recenica02 = recenica0.toUpperCase();
console.log("Recenica velikim slovima ce biti ispisana: \n" + recenica02);


// Ispisati novu recenicu gde ce svaka rec pozinjati velikim slovom.

const recenica = 
" sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp."
let novarecenica = "";

for (i = 0; i < recenica.length; i++) {
    if (i === 0 ) {
        novarecenica += recenica[i].toUpperCase();
    } else if (recenica[i-1] === " ") {
        novarecenica += recenica[i].toUpperCase();
    } else {
        novarecenica += recenica[i];
    }
}
console.log(novarecenica);

// 2.zadatak -->

const recenicaa =
" sledece subote cemo imati test koji predstavlja kraj prvog ciklusa. nakon toga cemo videti ko sve nastavlja sa drugim ciklusom it camp"
let novarecenicaa = "";
let duzina = recenicaa.length;

for (i = 0; i < duzina; i++) {
    if (i === duzina - 1 || recenicaa[i + 1] === "." || recenicaa[i + 1] === ",") {
        novarecenicaa += recenicaa[i].toUpperCase();
    } else if (recenicaa[i + 1] === " ") {
        novarecenicaa +=recenicaa[i].toUpperCase();
    } else {
        novarecenicaa += recenicaa[i];
    }
}
console.log(novarecenicaa);

// Prebrojati koliko ima malih slova u unetom stringu.Slova koja se koriste u stringu pripadaju iskljucivo engleskoj abecedi.

function malaSlova(recenica) {
    let brojac = 0;
    let duzina = recenica.length;
    for (i = 0; i < duzina; i++) {
        if (recenica[i] === recenica[i].toLowerCase() && recenica[i] !== " ") {
            brojac++;
        }
    }
    return brojac;
}
console.log(malaSlova("mitar"));


// 2. Ispisati da li je u unetom stringu ima vise malih ili velikih slova.

function razlika(recenica1) {
    let brojac1 = 0;
    let brojac2 = 0;
    let duzina = recenica1.length;
    for(i = 0; i < duzina; i++) {
        if (recenica1[i] === recenica1[i].toLowerCase() && recenica1[i] !== " ") {
            brojac1++;
        }else  if (recenica1[i] === recenica1[i].toUpperCase() && recenica1[i] !== " ") {
            brojac2++;
        } else if(brojac1 > brojac2) {
            return `Malih ima ${brojac1} i ima ih vise`;
        } else if (brojac1 < brojac2) {
            return `Velikih ima ${brojac} i ima ih vise`;
        } else {
            return "Ima ih jednako";
        }
    }
}

console.log(razlika("Mitar Vranic"))

// Sva velika slova u stringu treba svesti na mala slova 

function zad3(recenica) {
    for (i = 0; i < recenica.length; i++) {
        if (recenica[i] === recenica[i].toUpperCase()) {
            return recenica.toLowerCase();
        }
    }
}
console.log(zad3("SUPER JE dan"))


// 2 nacin

const toLower2 = (recenica) => recenica.toLowerCase();
console.log(toLower2("MALA SLOVA"));


// Pronadji poziciju poslednjeg razmaka u stringu.

const razmak = (recenica) => {
    const index = recenica.lastIndexOf(" ");
    if (index === -1) {
        return `U datom stringu nema razmaka`;
    }
    return `Poslednji razmak se nalazi na ${index} mestu`
}  
console.log(razmak("Pera ima devojku"))
console.log(razmak("Pera"));


// Ispisi duzinu prve reci unetog stringa.Npr `Pera ima devojku`, rezultat je 4.Podrazumeva se da ineti string neam vodece razmake;

function duzina(recenica) {
    
}



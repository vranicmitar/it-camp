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


// 5. Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.

const duzinaPrveReci = function (recenica) {
    const index = recenica.search(" ");
    return `Prva rec ima ${index} karaktera.`;
  };
  
  console.log(duzinaPrveReci("PRVA"));
  
  const duzinaPrveReci2 = function (recenica) {
    let brojac = 0;
    for (let i = 0; i < recenica.length; i++) {
      if (recenica[i] === " ") {
        break;
      } else {
        brojac++;
      }
    }
    return `Prva rec ima ${brojac} karaktera.`;
  };
  console.log(duzinaPrveReci2("koliko ima karaktera prva rec?"));
  
  // 6.	Iz unetog stringa treba izdvojiti N znakova sa leve strane. Npr. za string 'Pera ima devojku' i N=6, dobija se 'Pera i'. Ako je N veće od dužine stringa, kao rezultat se dobija ceo string.
  
  const prvihN = (recenica, n) => {
    if (n > recenica.length) {
      return recenica;
    } else {
      return recenica.substr(0, n);
    }
  };
  console.log(prvihN("Treba vratiti prvih 10 karaktera.", 10));
  console.log(prvihN("Treba vratiti prvih 100 karaktera.", 100));
  
  // Domaci zadatak:
  // Proveriti da li je uneti string palindrom (potpuno je isti kada se čita od pozadi). Npr. 'anavolimilovana' je palindrom.

function plaindrom(recenica) {
    let duzina = recenica.length;
    for (i = 0; i < duzina ; i++) {
        if (recenica[i] !== recenica[duzina -1 - i]) {
            return "Nije palindrom";
        }
    }
    return "Jeste palindrom"

}
console.log(plaindrom("anavolimilovana"));
// radi!!!!!!!!!!!!!!!!!!!!

// 2.nacin

function palindrom(rec) {
    let novarec = "";
    // pravljenje obrnutog stringa -->
    for (i = rec.length - 1; i >=0; i--) {
        novarec += rec[i];
    } 
    if (rec === novarec) {
        return "Data rec jeste palindrom"
    } else {
        return "Data rec nije palindrom"
    }

}

console.log(plaindrom("anavolimilovanb"))  // nije plaindrom
console.log(plaindrom("ana voli milovana"))  // nije plaindrom



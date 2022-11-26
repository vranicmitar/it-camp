// Funkcije u JS pred. blok koda koji se izvrsava koji se izvrsava samo prilikom pozivanja iste.
// Mozemo je definisati putem :
// 1. function keyword-a,
// 2. arrow function sintakse.

// 1. function keyword -->

// Pravimo funkciju koja sabira broj 3 i 5:

function zbir() {
    const zbir = 3 + 5;
    return zbir;
    // sve nakon returna ne vazi...
}
console.log(zbir());

// Pravimo funkciju koja sabira dva broja:

function zbirDvaBroja(par1, par2) { // par1 i par2 predstavljaju parametre funkcije
    return par1 + par2;
}

console.log(zbirDvaBroja(5,55)); // 5 i 55  predstavljaju argumente funkcije

// Napravi funkciju koja vraca zbir kvadrata dva broja koja pred. argumente

function zbirbrojeva(par3, par4) {
    return par3**2 + par4**2;
}
console.log(zbirbrojeva(5,5));
// console.log(zbirbrojeva(5)); --> NaN

// Defaultna vrednost nekog parametra:
// Napravi funkciju koja vraca zbir kvadrata dva broja ako se izostavi drugi argument funkcija ga racuna kao 0...

// 1.nacin

function zbirkv2(a, b) {
    if (b === undefined) {
        return a**2;
    } else {
        return a**2 + b**2;
    }
}
console.log(zbirkv2(2, 3)); // vraca 13
console.log(zbirkv2(2)); // vraca 4

// 2.nacin
// Defaultne vrdnosti se stavljaju na KRAJU!!!!
// Ne moze neka defaultna vrednost biti definisana pre obavezne!

function zbirkv3(a, b=0) {
    return a**2 + b**2;
}

console.log(zbirkv3(5, 5)); // rezultat 50
console.log(zbirkv3(5)); // rezultat 25


// Jos jedan nacin definisanja funkcije preko function keyword:

const aritmetickaVrednost = function(par1 = 1, par2 = 1, par3 = 1) {
    return (par1 + par2 + par3) / 3;
};

console.log(aritmetickaVrednost(4, 5, 3)); // rez 4
console.log(aritmetickaVrednost(4, 5));  // rez 3.3
console.log(aritmetickaVrednost()); // rez 1

// Napravite funkciju povrsina koja uzima 2 vrednosti.

const povrsina = function(a, b) {
    if (a === b) {
        return "Povrsina kvadrata iznosi " + a**2;
    } else {
        return "Povrsina pravugaonika iznosi " + a * b;
    }
};
console.log(povrsina(4, 6));
console.log(povrsina(4, 4));


// 1.zadatak

let kvadratbroja = function(a) {
    if (isNaN(a)) {
        return "Brojevi moraju biti korektni";
    } else {
        return "Kvadrat datog broja iznosi" +" "+ a**2;
    }
} 
console.log(kvadratbroja(+prompt("Unesi broj:")));

// 2.zadatak

// 3. Zadatak sa testa:
let recenica1;
recenica1 =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:

// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”

function novaRecenica(recenica) {
  let recenica2 = "";
  for (let i = 0; i <= recenica.length; i++) {
    if (i === recenica.length) {
      recenica2 += ".";
    } else if (
      recenica[i] === "a" ||
      recenica[i] === "e" ||
      recenica[i] === "i" ||
      recenica[i] === "o" ||
      recenica[i] === "u"
    ) {
      recenica2 += recenica[i].toUpperCase();
    } else {
      recenica2 += recenica[i];
    }
  }
  return recenica2;
}

console.log(novaRecenica("Pocelo je svetsko prvenstvo u fudbalu"));

// 2. Arrow function:

// const myFunction = () => {
// function code
// }

const proizvodDvaBroja = (br1, br2) => {
  return br1 * br2;
};

console.log(proizvodDvaBroja(2, 16));

// Ako Arrow funkcija ima samo jedan parametar, nije neophodno okruziti ga zagradama.
// Ako je funkcija jednostavna, tj. ako odmah vraca neki jednostavan izraz, onda sama sintaksa izgleda kraca (nije neophodno koristiti viticaste zagrade i return keyword)

const kvadratBroja = (broj) => broj ** 2;

// Napraviti arrow funkciju koja na ovnovu unete vrednosti vraca jedno od cetiri stanja:
// Ako je unet pozitivan broj, ispisuje poruku "UNET JE POZITIVAN BROJ"
// Ako je unet negativan broj, ispisuje poruku "UNET JE NEGATIVAN BROJ"
// Ako je uneta nula, ispisuje poruku "UNETA JE NULA"
// Ako nije unet broj, ispisuje poruku "UNETA VREDNOST NIJE BROJ"

const unos = () => {
  const broj = Number(prompt("Unesite neki broj: "));
  if (isNaN(broj)) {
    return "UNETA VREDNOST NIJE BROJ";
  } else if (broj === 0) {
    return "UNETA JE NULA";
  } else if (broj > 0) {
    return "UNET JE POZITIVAN BROJ";
  } else {
    return "UNET JE NEGATIVAN BROJ";
  }
};
console.log(unos());

// Mail u toku radnog vremena:

const mail = function (satnica, minutnica) {
  if (satnica >= 9 && satnica < 17 && minutnica >= 0 && minutnica < 60) {
    return "Mail je stigao u toku radnog vremena.";
  } else {
    return "Mail nije stigao u toku radnog vremena.";
  }
};
console.log(mail(4, 39));
console.log(mail(14, 39));
// console.log(mail(9, 85));

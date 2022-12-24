// Nastavaka Math metoda //
// Math.min() nam vraca najmanji broj od poslatih.Argumentata moze imati neograniceno.

console.log(Math.min(15, 4, 3, 12, 28, -55)); // rez je -55

// Math.max() nam vraca najveci broj od poslatih.Argumentata moze imati neograniceno.

console.log(Math.max(15, 4, 3, 12, 28, -55)); // rez je

// Primena kod nizova :
const najmanji = Math.min.apply(null, [19, 55, 33]);
console.log(najmanji);

// Math.random() - nam daje broj izmedju 0 (uklucujuci)  i  1 (nije ukljucena);

console.log(Math.random());

// Broj izmedju 0 i 1:

const broj = Math.round(Math.random());
console.log(broj);

// Broj izmedju 0 i 5(ukljuciujuci)
const broj1 = Math.round(Math.random() * 5);
console.log(broj1);

// Broj izmedju 50 i 100(ukljuciujuci)
const broj3 = Math.round(Math.random() * 50 + 50); // mnozimo sa brojem koliki ce se opseg zapravo biti a dodajemo broj koji predstavlja pocetnu vrednost
console.log(broj3);

// Math.log(x) - vraca vrednost log broja x za osnovu e
// Math.log2(x) - vraca vrednost log broja x za osnovu 2
// Math.log10(x) - vraca vrednost log broja x za osnovu 10

console.log(Math.log(10));
console.log(Math.log2(10));
console.log(Math.log10(10));

// Zadatak: Izracunati rastojanje izmedju dve tacke u prostoru ako su zadate dve krajnje tacke

function zadatak(x1, x2, y1, y2) {
  const AB = Math.sqrt((y1 - x1) ** 2 + (y2 - x2) ** 2);
  return AB;
}
console.log(zadatak(1, 1, 4, 5));

// Zadatak

function takmicenje(a1, a2, b1, b2) {
  let a = a1 + a2;
  let b = b1 + b2;

  if (a1 > 50 || a2 > 50 || b1 > 50 || b2 > 50) {
    return "Takmicari iz svakog predemta mogu imati maksimalno 50 poena";
  } else if (a === b && a2 > b2) {
    return `Pobednik je 1 takmicar`;
  } else if (b2 > a2) {
    return `Pobednik je 2 takmicar`;
  }
}
console.log(takmicenje(35, 35, 50, 30));

function bolji(m1, p1, m2, p2) {
  const poeniprvogtakmicara = m1 + p1;
  const poenidrugogtakmicara = m2 + p2;

  if (poeniprvogtakmicara < poenidrugogtakmicara) {
    return `Pobednik je drugi takmicar`;
  } else if (poeniprvogtakmicara > poenidrugogtakmicara) {
    return `Pobednik je prvi takmicar`;
  } else {
    if (p2 > p1) {
      return `Pobednik je drugi takmicar`;
    } else {
      return `Pobednik je prvi takmicar`;
    }
  }
}
console.log(bolji(30, 40, 30, 40));

function NZD(a, b) {
  const manji = Math.min(a, b);
}

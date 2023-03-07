// Promise je JS objekat koji predstavlja mesto za rezultate ashirone f-je
// sve dok traje izvrsavanje asihrone operacije.

const cizburger = new Promise((resolve, reject) => {
  const response = 200;
  //   const response = 404;
  if (response >= 200 && response < 300) {
    resolve();
  } else {
    reject();
  }
});

cizburger
  .then(() => console.log(`Dobio sam cizburger.`))
  .catch(() => console.log(`Nisam dobio obrok`));
//   .finally(() => console.log(`Obecanje je zavrseno`));

// Primer ----->
const niz = new Promise((resolve, reject) => {
  const response = 200;
  let novi = [1, 2, 3, 4];
  if (response >= 200 && response < 300) {
    resolve(novi);
  } else {
    reject(`Error`);
  }
});
// niz.then((niz) => console.log(niz)).catch(() => console.log(`Error`));

// chain efekat se postize tako sto vrednost koja treba biti koriscena u narednoj callback f-ji then metode
// se mora naci u return prethodne callback f-je prethodne then metode.
niz
  .then((niz) => {
    console.log(`Dobili smo ${niz}`);
    const parni = niz.filter((el) => el % 2 === 0);
    return parni;
  })
  .then((noviNiz) => console.log(`Filtriran niz je ${noviNiz}`))
  .catch((message) => console.log(message));

//   Zadatak 1 --> Napraviti f-ju koja nam sadrzi Promise koji proverava da li je poslati broj argument f-je
//                 ima vise od 10 samoglasnika.Ako argument ima vise od 10 samoglasnika neka se uspesno izvrsi obecnjae
//                 sa porukom `String zadovoljava uslov`.Ako argument ima manje od 11 samoglasnika neka se reject_a obecnjae
//                 uz poruku `String ne zadovoljava uslov` .U svakom slucaju neka stoji poruka `F-ja je uspesno izvrsena`

function proveraStringa(text) {
  const string = new Promise((resolve, reject) => {
    const novi = text.toLowerCase();
    let brojac = 0;
    for (i = 0; i < novi.length; i++) {
      if (
        novi[i] === `a` ||
        novi[i] === `e` ||
        novi[i] === `i` ||
        novi[i] === `o` ||
        novi[i] === `u`
      ) {
        brojac++;
      }
    }
    if (brojac > 10) {
      resolve(`String zadovoljava uslov`);
    } else {
      reject(`String ne zadovoljava uslov`);
    }
  });

  string
    .then((poruka) => console.log(poruka))
    .catch((novapor) => console.log(novapor));
  return `Proverili smo string`;
}

console.log(proveraStringa(`Neki string`));
console.log(proveraStringa(`aaaaaaaaaaaaaaaaaaaaaa`));

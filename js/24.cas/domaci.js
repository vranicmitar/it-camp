//  Domaci:
// 1.
// Napraviti funkciju koja izracunava obim kruga, gde se
//  poluprecnik unosi od strane korisnika.

function poluprecnik(r1) {
  let O = 2 * r1 * Math.PI;
  return Math.trunc(O);
}
console.log(poluprecnik(6));

// 2.
// Napraviti funkciju koja izracunava povrsinu kruga, gde
//  precnik predstavlja argument funkcije.

function precnik(R) {
  let r1 = R / 2;
  let P = r1 ** 2 * Math.PI;
  return Math.trunc(P);
}
console.log(precnik(5));

// 3.
// Napraviti funkciju za pretvaranje radijana u stepene.

const radijaniUStepene = (radijan) => radijan * (180 / Math.PI);

console.log(radijaniUStepene(0.7853981633974483));

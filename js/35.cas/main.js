// fibonacijev niz cije vrednosti ne prelaze 4 miliona pronadji sumu parnih elemenata
const niz = [1, 1];
let i = 2;
while (niz[i - 2] + niz[i - 1] < 4000000) {
  niz.push(niz[i - 2] + niz[i - 1]);
  i++;
}
const suma = niz
  .filter((element) => element % 2 === 0)
  .reduce((prev, curr) => prev + curr);

console.log(suma);

// Pronadji najveci palindrom napravljen od prozivoda dav trocifrena broja.

const isPalindrom = (broj) => {
  const strBroj = broj.toString();
  let newStrBroj = "";
  for (let i = strBroj.length - 1; i >= 0; i--) {
    newStrBroj += strBroj[i];
  }
  if (strBroj === newStrBroj) {
    return true;
  } else {
    return false;
  }
};

const maxPalindrom = () => {
  const niz = [];
  for (i = 100; i < 1000; i++) {
    for (k = i; k < 1000; k++) {
      if (isPalindrom(i * k) && !niz.includes(i * k)) {
        niz.push(i * k);
      }
    }
  }
  return Math.max.apply(null, niz);
};
console.log(maxPalindrom());
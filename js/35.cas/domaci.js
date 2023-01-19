// 1. Iz niza od 10 elemenata izracunati sumu parnih brojeva niza.

const nizzzz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const novinizzz = nizzzz
  .filter((element) => element % 2 === 0)
  .reduce((prev, curr) => prev + curr);
console.log(novinizzz);

// 2. From the array of numbers, choose even double even numbers and compute the sum using Array's filter, map and reduce methods.

const novinizzz2 = nizzzz
  .filter((el) => el % 2 === 0)
  .map((el) => el ** 2)
  .reduce((prev, curr) => prev + curr);
console.log(novinizzz2);

// 3. Write a JavaScript program to find the most frequent item of an array.
// Sample array :

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
function najvisePronadjen(arr1) {
  const newArr1 = [];
  arr1.map((element) => {
    let brojac = 0;
    for (let i = 0; i < arr1.length; i++) {
      arr1[i] === element ? brojac++ : brojac;
    }
    newArr1.push(brojac);
  });
  const najvisePronadjen = Math.max.apply(null, newArr1);
  const indexNajvisePronadjenog = newArr1.indexOf(najvisePronadjen);
  return `Najvise ima karaktera ${arr1[indexNajvisePronadjenog]}`;
}
console.log(najvisePronadjen(arr1));

// 2.nacin

let pojavljivanje = 1;
let element;
let brojac = 0;
for (i = 0; i < arr1.length; i++) {
  for (k = i; k < arr1.length; k++) {
    if (arr1[i] === arr1[k]) {
      brojac++;
      if (brojac > pojavljivanje) {
        element = arr1[i];
        pojavljivanje = brojac;
      }
    }
  }
  brojac = 0;
}
console.log(`To je element ${element} i pojavljuje se ${pojavljivanje} puta`);
// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function zameni(recenica) {
  let novarecenica = "";
  for (let i = 0; i < recenica.length; i++) {
    const zameni2 =
      recenica[i] === recenica[i].toUpperCase()
        ? (novarecenica += recenica[i].toLowerCase())
        : (novarecenica += recenica[i].toUpperCase());
  }
  return novarecenica;
}
console.log(zameni("The Quick Brown Fox"));

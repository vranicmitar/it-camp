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

// 4. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
let element;
let brojPojavljivanja = 1;
let brojac = 0;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] === arr1[j]) {
      brojac++;
      if (brojPojavljivanja < brojac) {
        brojPojavljivanja = brojac;
        element = arr1[i];
      }
    }
  }
  brojac = 0;
}
console.log(`${element} se pojavljuje ${brojPojavljivanja} puta.`);

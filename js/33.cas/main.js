// Kvadrirati one brojeve koji imaju index 0 3 5;
let brojevi = [2, 5, 8, -3, -5, 9];
const brojev1 = brojevi.map((element, index) => {
  if (index === 0 || index === 3 || index === 5) {
    return element ** 2;
  } else return element;
});

console.log(brojevi1);

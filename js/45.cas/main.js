// Zadatak -->

const prinatj = (arr1, arr2) => {
  const newArr = [];
  const arr22 = arr2.filter((el) => el < arr1.length);
  for (i = 0; i < arr22.length; i++) {
    newArr.push(arr1[arr22[i] - 1]);
  }
  return newArr;
};

console.log(prinatj([23, 52, 38, 44], [3, 1, 1, 2]));

// zadatak

const count = (niz) => {
  let brojac = 0;
  for (i = 1; i < niz.length; i++) {
    if (niz[i] === 2 * niz[i - 1] && niz[i] === niz[i + 1] - 10) {
      brojac++;
    }
  }
  return brojac;
};

console.log(count([10, 20, 30], 60, 70));

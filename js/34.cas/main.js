// filter() metoda kreira novi niz sa onim elementima koji su prosli test.
// Novodobijeni niz moze imati maximalno elemenata na koji se primenjuje metoda.

const godine = [19, 17, 20, 17, 16, 15, 19, 20];
const punoletni = godine.filter((elemnt) => elemnt > 17);
console.log(punoletni);

// Napravi novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza gde je drugo slovo "e";

const niz = [
  "Bakir",
  "Haris",
  "Amer",
  "Dzenan",
  "Hasan",
  "Alen",
  "Miona",
  "Emin",
  "Merisa",
  "siiuuuuu",
];

const noviniz = niz.filter((element) => element[1] === "e");
console.log(noviniz);

// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6

const niz2 = niz.filter((element) => {
  if (element.length <= 4) {
    return element;
  }
});
console.log(niz2);

// Napravi novi niz koji filtrira postojeci i vraca novi sa ciji je tip boolean;

const newArr = ["Rec", "dve reci", 26, true, false, [true, false], 49, true];

const newArr2 = newArr.filter((element) => typeof element === "boolean");
console.log(newArr2);

// ZADATAK

function filtriraj(arr) {
  const newArr = arr.filter((element) => element > 2);
  const newArr2 = newArr.map((element) => {
    if (element < 8) {
      return element * 2;
    } else {
      return element * 7;
    }
  });
  const newArr3 = newArr2.filter((element) => element < 10);
  return newArr3;
}
console.log(filtriraj([1, 2, 3, 4, 5, 6, 7, 8]));

// reduce() metoda vraca jednu vrednost. Iteracija se vrsi kroz ceo niz .

// Sabrati sve elemente niza:

const saberi = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
console.log(saberi);

// Dodati pocetnu vrednost 350;

const iznos = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  350
);
console.log(iznos);

// prosecna starost

const prosecnastarost = godine.reduce(
  (previousValue, currentValue) => previousValue + currentValue
);
const prosecnastarost2 = (prosecnastarost / godine.length).toFixed(0);
console.log(prosecnastarost2);

// milje u km

const miles = [55, 78, 140, 121, 96, 100, 67];

const totalKilometers = (arr) => {
  const km = arr.map((el) => el * 1.61);
  const ukupno = km.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return `Ima ukupno ${ukupno.toFixed(0)} km`;
};

console.log(totalKilometers(miles));

//
// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
// array1 = [1, 0, 2, 3, 4];
// array2 = [3, 5, 6, 7, 8, 13];
// // Expected Output :
// [4, 5, 8, 10, 12, 13]
const saberi2 = (arr, arr2) => {
  const length = arr.length > arr2 ? arr.length : arr2.length;
  const newArr = [];
  for (i = 0; i < length; i++) {
    if (arr[i] === undefined) {
      newArr.push(arr2[i]);
    } else if (arr2[i] === undefined) {
      newArr.push(arr[i]);
    } else {
      newArr.push(arr[i] + arr2[i]);
    }
  }
  return newArr;
};

console.log(saberi2([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

// duplirati parne sabrati parne (filter,map,reduce)
// izracunaj sumu parnih brojeva iz niza od 10 elemenata;


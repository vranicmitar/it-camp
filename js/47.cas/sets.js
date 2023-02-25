// JS set je kolekcija unikatnih vrednosti.
// Ne sadrze duplikate

const mySet = new Set([14, "it camp", true, [1, 2, 3]]);
console.log(mySet);

// Metode Setova:

// 1.Za kreiranje seta koristimo new Set(elementi razlicitog tipa)

// 2.Za dodavanje elemenata koristimo add

mySet.add(false);
console.log(mySet);

// 3.Za brisanje lemenata koristimo delete metodu

mySet.delete("it camp");
console.log(mySet);

// 4.Za proveru da li set sadrzi odredjeni element koristimo has()

console.log(mySet.has("it camp")); // vraca boolean

// 5.forEach() metoda sluzi za iteraciju kroz set

mySet.forEach((el) => console.log(el));

// 6.values() metoda vraca iterator sa vrednostima seta

console.log(mySet.values());

// 7.Za proveru duzine seta se koristi size() property:

console.log(mySet.size);

// Izbaci duplikate

// 1.nacin

const newArr = (arr) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(newArr([1, 2, 3, 4, 5, 6, 6]));

// 2.nacin

const remove = (arr) => [...new Set(arr)];
console.log(remove([1, 2, 3, 3, 4, 4, 5, 5, 6])); // 1,2,3,4,5,6

// MAPE u JS sadrze key value parove gde kljucevi mogu biti bilo kog tipa podatka.

// Mape pamte redosled originalne insertacije

const myMap = new Map([
  [`apple`, 60],
  [`orange`, 198],
  [true, 19],
  [false, -19],
]);
console.log(myMap);

// Glavne metode kod Mapa --->

// 1.Za kreiranje mape se koristi new Map

// 2.Za setovanje vrednosti koristimo set() metodu
// Pravljenje novog key value para i menja vrednosti

myMap.set(`strawberry`, 240);
console.log(myMap);

myMap.set(false, 0);
console.log(myMap);

// 3.get() metoda koristi se za dobijanje vrednosti odredjenog kljuca.

console.log(myMap.get(`apple`));

// 4.delete() metoda sluzi za brisanje key value para

myMap.delete(`orange`);
console.log(myMap);

// 5.has() sluzi za prisutnost elemenata (vraca boolean)

console.log(myMap.has(true));
console.log(myMap.has(`lagano`));

// 6.forEach() sluzi za iteriranje korz mapu.

myMap.forEach((el) => console.log(el));

// 7.entries() vraca key value parove u iteratoru

console.log(myMap.entries());

// 8.size() property za proveru duzine mape

console.log(myMap.size);

//  Zadatak

const gameEvents = new Map([
  [17,`Goal`],
  [36,`Subsitution`],
  [47,`Goal`],
  [61,`Subsitution`],
  [64,`Yellow Card`],
  [69,`Red Card`],
  [70,`Subsitution`],
  [72,`Subsitution`],
  [76,`Goal`],
  [80,`Goal`],
  [92,`Yellow Card`],
])

function events(someMap) {
    const events = [
    ]
    const entries = someMap.entries()
    
}

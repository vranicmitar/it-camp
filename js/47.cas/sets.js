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

// //  Zadatak
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// 2. After the game has finished, it was found that the yellow card from 64 minutes was unfair. So remove this event from the game events log
// 3. Print the following string to the console: "an event happened, on average, every 9 minutes"
// 4. Loop over the events and log them to the console, marking whether it's in the first half or
// the second half (after 45 min) of the game like this:
//     [FIRST HALF] 17: ⚽ GOAL
// */

const gameEvents = new Map([
  [17, "Goal"],
  [17, "offside"],
  [36, "Substitution"],
  [47, "Goal"],
  [61, "Substitution"],
  [64, "Yellow card"],
  [69, "Red card"],
  [70, "Substitution"],
  [72, "Substitution"],
  [76, "Goal"],
  [80, "Goal"],
  [92, "Yellow card"],
]);

function events(someMap) {
  const events = [...new Set(someMap.values())];

  return events;
}
console.log(events(gameEvents));
console.log(
  `------------------------------------------------------------------------------------------------------`
);

const yellowCard = (map2) => {
  if (map2.has(64)) {
    map2.delete(64);
  }
  return map2;
};
console.log(yellowCard(gameEvents));

console.log(
  `------------------------------------------------------------------------------------------------------`
);

const frstSecHalf = (map4) => {
  for (let [key, value] of map4) {
    let poluvreme = key <= 45 ? "FIRST HALF" : "SECOND HALF";
    console.log(`[${poluvreme}] ${key}: ${value}`);
  }
};
console.log(frstSecHalf(gameEvents));

// Nastavljamo Date - ove
// Metode za prikazivanje datuma :

const trenutno = new Date();
console.log(trenutno);

// 1. toString()

console.log(trenutno.toString());

// 2. toUTCString()

console.log(trenutno.toUTCString());

// 3. toDateString()

console.log(trenutno.toDateString());

// 4. toISOString()

console.log(trenutno.toISOString());

// 5. toLocalString()

console.log(trenutno.toLocaleString());

// 6.toLocalTimeString()

console.log(trenutno.toLocaleTimeString());

// Get metode:

// Koristimo ih za dobijanje informacija iz Date objekata.

// getFullYear()

console.log(trenutno.getFullYear());

// getMonth()

console.log(trenutno.getMonth() + 1);

// getDate()

console.log(trenutno.getDate());

// getDay
let nedelja = new Date("2022 Dec 25");
console.log(trenutno.getDay()); // 4
console.log(nedelja.getDay()); // 0

// getHours()

// getMinutes()

// getSeconds()

// getMiliseconds()

// getTime() - vraca broj milisekundi.

// Set metode -->

// Dozvoljavaju menjanje nekih vrednosti kod Data objekata.

// setFullYear()
trenutno.setFullYear(2015);
console.log(trenutno);

// setMonth()
trenutno.getMonth(11);
console.log(trenutno);

// setDate()
trenutno.setDate(19);
console.log(trenutno);

// setHours()
trenutno.setHours(13);
console.log(trenutno.toLocaleTimeString());

// setMinutes()

// setSeconds()

// setMiliseconds()

// setTime()

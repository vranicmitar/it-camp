// Java Script Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.

// forEach() metoda poziva call back fukciju za svaki element niza. (klasicna for petlja ali za nizove)

const niz = ["tarik", "hamed", "emin", "bakir", "dzenan"];

// forEach() moze imati 3 parametra:
// 1.element niza
// 2.index niza
// 3.ceo niz
// Ne moramo koristiti element,index i array ali moramo znati da je redosled isti.
//1.//
niz.forEach((element) => {
  console.log(element);
});

//2.//
niz.forEach((element, index) => {
  console.log(`${element} se nalazi na ${index + 1} mestu`);
});

//3.//
niz.forEach((element, index, arr) => {
  console.log(
    `${element} se nalazi na ${index + 1} mestu u nizu.Ceo niz je ${arr}`
  );
});

// map() metoda kreira novi niz (iste duzine kao originalni niz) sa logikom predstavljenom unutar callback funkcije unutar date metode.

// Preko petlje napraviti novi niz koji ce imati sve elemente originalnog.

const niz2 = [];
for (let student of niz) {
  niz2.push(student);
}
console.log(niz2);

// const niz3 = niz.map(function (student) {
//   return student;
// });
// console.log(niz3);

const niz3 = niz.map((student) => student);
console.log(niz3);

// Preko map() meotde napraviti novi niz gde ce se imena svih studenata pocinjacti velikim slovom

const niz4 = niz.map((student) => student[0].toUpperCase() + student.slice(1));
console.log(niz4);

const brojevi = [-5, 4, 3, 10, 14, -5];

// DOMACI -----> Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1) a pozitivne kvadrirati.

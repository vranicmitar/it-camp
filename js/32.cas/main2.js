// Java Script Array Iteration //

// Array Iteration metode prolaze kroz svaki element niza.
3;
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

// Domaci:
// 1. Pomocu map() metode napraviti novi niz stringova ciji ce elementi da budu
// ispisani velikim slovima.

const niz5 = niz.map((student) => student.toUpperCase());
console.log(niz5);

// 2. Napraviti novi niz koji sadrzi kvadrate elemenata postojeceg niza:

const niz6 = brojevi.map((kvadrat) => kvadrat ** 2);
console.log(niz6);

// 3. Napraviti novi niz koji sadrzi kvadratne korene elemenata postojeceg niza.

const niz7 = brojevi.map((koren) => Math.sqrt(koren));
console.log(niz7);

// 4.
// const brojevi = [-5, 4, 3, 10, 14, -5];
// Napraviti novi niz koji ce sve negativne brojeve pomnoziti sa (-1), a pozitivne kvadrirati.

const niz8 = brojevi.map(function (broj) {
  const izracunaj = broj < 0 ? broj * -1 : broj ** 2;
  return izracunaj;
});
console.log(niz8);

// Napraviti funkciju koja pravi novi niz gde ce se pozitivni elementi kvadrirati a negativni pomnoziti sa (-1)
//  a ako se neki element pojavljuje vise puta u originlalnom nizu na svako sledece pojavljivanje ce se u novom nizu dodati element
// "ovo je bio duplikat"

const second = (arr) => {
  const newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).includes(arr[i])) {
      newArr.push("ovde je bio duplikat");
    } else if (i < 0) {
      newArr.push(-arr[i]);
    } else {
      newArr.push(arr[i] ** 2);
    }
  }
  return newArr;
};

console.log(second([5, 4, -9, 0, -6, 5, 4]));

// duplikati


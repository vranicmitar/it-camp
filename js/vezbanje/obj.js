let myArr = ["foo", 42, "bar"];
myArr.buz = "buz";
console.log(myArr);
console.log(myArr.length);

function anotherFunc() {
  /*..*/
}
let anotherObj = {
  c: true,
};
let anotherArr = [];
let myObj = {
  a: 2,
  b: anotherObj,
  c: anotherArr,
  d: anotherFunc,
};
anotherArr.push(anotherObj, myObj);
console.log(anotherArr);

// let newObj = JSON.parse(JSON.stringify(someObj));

// console.log(newObj);

let newObj = Object.assign({}, myObj);

console.log(newObj.a);
console.log(newObj.b === anotherObj);
console.log(newObj.c === anotherArr);
console.log(newObj.d === anotherFunc);

const person = {
  firstName: "John",
  lastName: "Doe",
};
let p2 = Object.assign({}, person);
console.log(p2);

let copiedPerson = person;
copiedPerson.firstName = "Jane";
console.log(person);

// nepromenjivost

let myObj1 = {};

Object.defineProperty(myObj1, "FAVORITE_NUMBER", {
  value: 42,
  writable: true,
  configurable: true,
  //   enumerable: true,
});
console.log(myObj1);

// let myObj2 = {
//   a: 2,
// };
// Object.preventExtensions(myObj2);
// myObj2.b = 3;
// console.log(myObj2.b);

const iterable = "boo";
for (i of iterable) {
  console.log(i);
}

const student = {
  registration: "123456",
  name: "Sandeep",
  age: 33,
};
console.log(student);
Object.entries(student).forEach(([key, value]) => console.log(key, value));

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

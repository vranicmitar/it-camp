const prom1 = 55;
const prom2 = !55;
const prom3 = !!55;

const prom4 = !!true;
const prom5 = !"";
const prom6 = !(55 + "");

console.log(prom1);
console.log(prom2);
console.log(prom3);
console.log(prom4);
console.log(prom5);
console.log(prom6);

add(10, 15);

function add(a, b) {
  console.log(a + b);
}

// ne radi hoisting preko arrow function
hello("Mehmede");

const hello = (par) => {
  console.log(`Hello ${par0}`);
};

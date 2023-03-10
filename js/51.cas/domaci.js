// Domaci:
// Napraviti promise koji proverava da li je neki objekat ispunio uslova da je njegov property godine veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni".
// U slucaju da osoba nije punoletna catch() vraca broj godina osobe.

const checkYears = new Promise((resolve, reject) => {
  const person = {
    ime: `Mitar`,
    prezime: `Vranic`,
    godine: 20,
  };
  if (person.godine > 17) {
    resolve(`Vi ste punoletni`);
  } else {
    reject(`Data osoba nije punoletna jer ima ${person.godine} godina.`);
  }
});

checkYears.then((por) => console.log(por)).catch((por2) => console.log(por2));



const checkAge = (person) => {
  return new Promise((resolve, reject) => {
    if (person.age >= 18) {
      resolve("Vi ste punoletni");
    } else {
      reject(person.age);
    }
  });
};
const person1 = {
  firstName: `Mitar`,
  lastName: `Vranic0`,
  age: 20,
};

checkAge(person1)
  .then((message) => console.log(message))
  .catch((age) => console.log(`Osoba ima ${age} godina`));

// OBJEKTI (glavna stvar u JS)

// Objekti su promenljive koje sadrze vise vrednosti.

// Pred. se u      key:value      parovima .

const person = {
  firstName: "Nikola",
  lastName: "Bozovic",
  age: 18,
  adult: true,
};
console.log(person);

// Pristupannje odredjene vrednostima objekata mozemo izvrisi na 2 nacina
// JedaN key:value par se zove porperty (svojstvo).

// 1.objectName.propertyName    (person.firstName)
// 2.objectName["propertyName"] (person[firstName])

console.log(person.firstName);
console.log(person.adult);

const punoletnost = person.adult === true ? "jeste" : "nije";
console.log(`${person["firstName"]} ${punoletnost} punoletan`);

// Object Methods //
// Objekti takodje mogu imati meotde.
// Metode su f-je koje ce se izvrsiti na objektu.

// Metode su skladistene u svojstivima kao defincije f-je.

const person2 = {
  firstName: "Alen",
  lastName: "Muslic",
  age: 17,
  adult: false,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person2.fullName());

// U JS this je keyword  (rezervisana rec) koja ukazuje na neki objekat.
// this nije promenljiva i ne mozemo promeniti vrednost this.

// this ukazuje na razlicit objekat u zavisnosti od toga gde se koristi

// ** u nekom objektu this ukazuje na taj objeakt
// ** U Global Scope this ukazzuje na global obejct

// Zadatak

const vrati = (rec) => {
  const niz = [];
  for (i = 0; i < rec.length; i++) {
    for (k = i; k < rec.length; k++) {
      niz.push(rec.slice(i, k + 1));
    }
  }
  return niz
};

cosno
// // OOP JS

// // function User(firstName, lastName) {
// //   this.firstName = firstName;
// //   this.lastName = lastName;
// // }

// // const bakir = new User(`Bakir`, `Ujkanovic`);
// // // console.log(bakir);

// // class Person {
// //   //   ime = `Default`;
// //   //   prezime;
// //   //   godine;

// //   constructor(ime, prezime, godine) {
// //     this.ime = ime;
// //     this.prezime = prezime;
// //     this.godine = godine;
// //   }

// //   imeIPrezime() {
// //     // kod klasa nije potreban function keyword
// //     return `${this.ime} ${this.prezime}`;
// //   }
// // }

// // // const person1 = new Person();+++++
// // // console.log(person1);

// // const person1 = new Person(`Mehmed`, `Kucevic`, 16);
// // console.log(person1);
// // console.log(person1.imeIPrezime());
// // Person1 moze pristupiti bilo kojoj metodi iz klase Person(koja je napravljena na standardan nacin).
// console.log(`---------------------------------------------------------------`);

// class Product {
//   static increaseForTen = 1.1;
//   constructor(name, price, desc, weight) {
//     this.name = name;
//     this.price = price;
//     this.description = desc;
//     this.weight = weight;
//   }
//   static IncreasePrice() {
//     console.log(
//       `This method will increase price for our product for 10% multiplaying current price buy ${this.increaseForTen} `
//     );
//   }
// }

// const socks = new Product(`white socks`, 120, `100% cotton`, 50);
// console.log(socks);

// Ne mozemo pristupiti statickoj ,etodi iz objekta vec samo direktno preko klase
// console.log(socks.IncreasePrice());

// console.log(Product.increaseForTen);
// console.log(Product.IncreasePrice());

// INHERITANCE

class Person {
  constructor(ime, prezime, pol, starost) {
    this.ime = ime;
    this.prezime = prezime;
    this.pol = pol;
    this.starost = starost;
  }

  getInfo() {
    console.log(`${this.ime} ${this.prezime} ima ${this.starost}`);
  }
}
const person = new Person(`Mitar`, `Vranic`, `M`, 20);
console.log(person);
console.log(person.getInfo());

class Student extends Person {
  constructor(
    ime,
    prezime,
    pol,
    starost,
    brojIndexa,
    godinaStudija,
    prosecnaOcena
  ) {
    super(ime, prezime, pol, starost);
    this.brojIndexa = brojIndexa;
    this.godinaStudija = godinaStudija;
    this.prosecnaOcena = prosecnaOcena;
  }

  getInfo() {
    console.log(
      `${this.ime} ${this.prezime} ima ${this.starost}.Trenunto je na ${this.godinaStudija}. godini studija i prosecna ocena mu je ${this.pro}`
    );
  }
}

const student = new Student(`Amer`, `Honic`, `M`, 19, 123321, 1, 7.77);
console.log(student);
console.log(student.getInfo());

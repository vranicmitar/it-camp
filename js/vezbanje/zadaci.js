// Domaci zadatak.
// Napraviti funkciju koja trazi od korisnika da unese neku recenicu, zatim funkcija vraca,
//  datu recenicu u vise oblika (spojenu u jedan string).
// 1. recenicu ispisanu velikim slovima,
// 2. recenicu ispisanu malim slovima,
// 3. pola recenice ispisano velikim slovima, pola recenice ispisano malim slovima
// 4. Ako se u recenici nadje rec 'skola' neka bude zamenjena recju fakultet,
// 5. Neka bude ispisano prvih 10 karaktera unete recenice,
// 6. Neka bude ispisano poslednjih 10 karaktera unete recenice.

const zadatak = (recenica) => {
  const prva = recenica.toUpperCase();
  const druga = recenica.toLowerCase();
  let duzina = recenica.length;
  let polaDuzine;
  polaDuzine =
    duzina % 2 === 0 ? (polaDuzine = duzina / 2) : Math.round(duzina / 2);

  let prvaPol = recenica.slice(0, polaDuzine).toUpperCase();
  let drugaPol = recenica.slice(polaDuzine, duzina).toLowerCase();
  const treca = prvaPol.concat(drugaPol);
  const cetvrta = recenica.replace(/skola/g, "fakultet");
  const peta = recenica.substr(0, 10);
  const sesta = recenica.slice(-10);
  return prva.concat(
    "\n",
    druga,
    "\n",
    treca,
    "\n",
    cetvrta,
    "\n",
    peta,
    "\n",
    sesta
  );
};
console.log(zadatak("Ja sam isao u skola neko vreme a sada radim"));

// Zadatak 1
// Napisati program kojim se unosi niz od N elemenata i potom ispisuju elementi niza.
niz = [0, 1, 2, 3, 4, 5, 6];
console.log(niz);

// Zadatak 3
// Formira se niz od N članova. Izračunati zbir elemenata niza.

function saberiElemente(niz) {
  const saberi2 = niz.reduce((prev, cur) => prev + cur);
  return saberi2;
}
console.log(saberiElemente([1, 2, 3, 4, 5]));

// Zadatak 4
// Izračunati prosek (aritmetičku sredinu) svih elemenata niza od N numeričkih elemenata.

function aritmetickaSredina(niz) {
  const prosek = niz.reduce((prev, cur) => prev + cur);
  const prosek2 = (prosek / niz.length).toFixed(2);
  return prosek2;
}
console.log(aritmetickaSredina([1, 2, 3, 4, 5]));

// Zadatak A.1
// Napisati program kojim se pronalazi broj nula u unetom nizu brojeva.

const prebrojNule = (niz) => {
  let brojac = 0;
  for (i of niz) {
    if (i === 0) {
      brojac++;
    }
  }
  return brojac;
};
console.log(prebrojNule([0, 1, 0, 1, 1, 0, 1, 0]));

// Zadatak A.3
// Izračunati zbir elemenata niza koji su veći od svog indeksa.

const zbir = (niz) => {
  const izracunaj = niz.filter((el, index) => el > index);
  const izracunaj2 = izracunaj.reduce((prev, cur) => prev + cur);
  return izracunaj2;
};
console.log(zbir([0, 1, 5, 10, 15, 20]));

// Zadatak A.4
// Kreira se niz od N članova i unosi broj X. Treba ispisati indekse onih članova niza koji su jednaki broju X.

const ispisi = (niz, x) => {
  const noviniz = niz.filter((el, index) => index === x);
  return noviniz;
};
console.log(ispisi([0, 1, 2, 3], 3));

// Zadatak A.5
// Prebrojati koliko ima negativnih brojeva u nizu, u intervalu od indeksa I1 do indeksa I2.

////////////

// Zadatak A.6
// U unetom nizu celih brojeva, treba naći broj parnih i broj neparnih elemenata niza.

const nadji = (niz) => {
  let brojac1 = 0;
  let brojac2 = 0;
  for (i of niz) {
    if (i % 2 === 0) {
      brojac1++;
    } else {
      brojac2++;
    }
  }
  return `Parnih ima ${brojac1} a neparnih ${brojac2}.`;
};
console.log(nadji([1, 3, 5, 2, 4, 6, 8]));

// Zadatak A.7
// Proveriti da li u nizu ima više pozitivnih ili negativnih brojeva.

const razlika = (niz) => {
  let brojac1 = 0;
  let brojac2 = 0;
  for (i = 0; i < niz.length; i++) {
    if (niz[i] > 0) {
      brojac1++;
    } else {
      brojac2++;
    }
  }
  const ter = brojac1 > brojac2 ? `Ima vise pozitivnih` : `Ima vise negativnih`;
  return ter;
};
console.log(razlika([-5, -6, -3, 10, -5, -6]));

// Zadatak A.8
// Izračunati aritmetičku sredinu svih pozitivnih elemenata niza celih brojeva.

function aritmetic(arr) {
  const total = arr.filter((el) => el > 0);
  const total2 = total.reduce((prev, cur) => prev + cur);
  const total3 = (total2 / total.length).toFixed(2);
  return total3;
}
console.log(aritmetic([3, 4, -5, -6, -5, 1]));

// Zadatak A.9
// Izračunati proizvod svih elemenata koji se nalaze na parnim pozicijama (indeksima).

const parni = (niz) => {
  const novi = niz
    .filter((el, index) => index % 2 === 0)
    .reduce((prev, cur) => prev * cur);
  return novi;
};
console.log(parni([1, 2, 3, 4]));

// Zadatak A.16
// Proveriti da li među elementima niza nema duplikata.

const remove = (arr) => [...new Set(arr)];
console.log(remove([1, 2, 3, 3, 4, 4, 5, 5, 6])); // 1,2,3,4,5,6

// Zadatak A.11
// Za unete nizove A od N i B od M celih brojeva, treba ispisati M elemenata niza A onim redosledom kako je navedeno u nizu B. Podrazumeva se da ni jedan elemenat niza B nije veći od N.
// Npr. A=[23,52,38,44} i B=[3,1,1,2], ispisuje se 38, 23, 23, 52.

let a = [23, 52, 38, 44];
let b = [3, 1, 1, 2];

// 38,23,23,52

// 6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

nizsiu = [6, 4, 0, 3, -2, 1];

const novi = nizsiu.sort((a, b) => a - b);
console.log(novi);

// 7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const vrati = (rec) => {
  const niz = [];
  for (i = 0; i < rec.length; i++) {
    for (k = i; k < rec.length; k++) {
      niz.push(rec.slice(i, k + 1));
    }
  }
  return niz;
};

console.log(vrati("dog"));

// Vezbanje

// 1.	(20) Uneti string se šifruje tako što se zamenjuje redosled znacima u stringu.
// Prvi i drugi zamene mesta, zatim 3. i 4. zamene mesta itd. Npr. za string 'Pera ima devojku', treba dobiti 'ePari amd vejouk'.
// Ako string ima neparan broj znakova, poslednji znak se ne dira.

const zameni = (recenica) => {
  let novarecenica = "";
  for (i = 0; i < recenica.length; i++) {
    if (!recenica.length % 2 === 0 && !i === recenica.length - 1) {
      novarecenica += recenica[recenica.length - 1];
    } else if (i % 2 === 0) {
      novarecenica += recenica[i + 1];
    } else if (!i % 2 === 0) {
      novarecenica += recenica[i - 1];
    }
  }
  return novarecenica;
};
console.log(zameni("Pera ima devojku"));

// 2.	(20) Napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// Napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve. U drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20.
// Funkcija na kraju treba da vrati dva napravljena pomocna niza.
DATA1 = [2, 26, 38, 75, 11, 29];
DATA2 = ["a", "b", "c", "d", "e"];

const napravi = (a, b) => {
  const d = a.concat(b);
  const c = a.filter((el) => el % 2 !== 1);
  c.unshift(10, 20);
  return `Prvi pomocni (spojeni) niz je ${d} \n a drugi je ${c}`;
};
console.log(napravi(DATA1, DATA2));

// 3.	(20) Shopping Cart.
// There are array of objects with all products that someone bought. In product object we got name, price per unit, and amount of units.
//  Your job is to loop throught array, and make new array of objects with two key-value pairs name and total price for that product.
// After you did the job with new array, you need to sum all prices of every product and return total sum value,
// and add a FIXED 320 shipping costs.
// After all of that you should print in console following statement:
// 'You got ${num of products} in cart, shipping cost is ${shipping cost}, your total is ${total}.'

const CART_DATA = [
  {
    id: 1,
    name: "Hawai Shirt",
    price: 30,
    amount: 2,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Adidas Slippers",
    price: 35,
    amount: 1,
    categorty: "summer",
    rating: 4.5,
  },
  {
    id: 6,
    name: "White T-Shirt",
    price: 15,
    amount: 4,
    categorty: "summer",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];

// const cart2 = CART_DATA.map((element) => {
//   return {
//     name: element.name,
//     Totalprice: element.price * element.amount,
//   };
// });

// const cart3 = cart2.map((element) => {
//   return element.Totalprice;
// });

// const cart4 = cart3.reduce((prev, curr) => prev + curr);
// cons
// console.log(
//   `You got ${
//     cart2.Totalprice
//   } in cart, shipping cost is ${340}, your total is ${cart3}.`
// );

const niz1 = function (arr) {
  const newobject = arr.map((element) => {
    return {
      name: element.name,
      totalValue: element.price * element.amount,
    };
  });
  let TOTAL = newobject.map((element) => {
    return element.totalValue;
  });
  let suma = TOTAL.reduce((prev, curr) => {
    return prev + curr;
  });
  const shipping = 320;

  return `You got ${
    newobject.length
  } in cart, shipping cost is ${shipping}, your total is ${suma + shipping}.`;
};
console.log(niz1(CART_DATA));

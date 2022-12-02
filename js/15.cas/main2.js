// trim() metoda brise razmake sa obe strane stringa.

const recenica = "      da li vam je hladno ovde?        ";
console.log(recenica);
console.log(recenica.length);

const recenica2 = recenica.trim();
console.log(recenica2);
console.log(recenica2.length);

// Postoje 3 metode za ekstraktovanje jednog karaktera nekog stringa -->

// 1. charAt (index) - vraca nam karakter po indexu
// 2. charCodeAt (index) - vraca nam kod karaktera nekog strniga za poslatim indexom
// 3. string[index] - vrlo slicna charAt metodi (sa jednom razlikom )

const novarecenica = "Spava mi se.";

const char1 = novarecenica.charAt(3);
const char11 = novarecenica.charAt(46);
console.log(char1);
console.log(char11); // rezultat je ""

const char2 = novarecenica.charCodeAt(3);
console.log(char2);

const char3 = novarecenica[3];
const char33 = novarecenica[32];
console.log(char3);
console.log(char33); // rezultat je undefined


// Domaci zadatak --->

const sabiranje4broja = (br1, br2, br3, br4) => {
    if(isNaN(br1) || isNaN(br2) || isNaN(br3) || isNaN(br4)) {
        return "Nisu uneta 4 broja"
    }
  return br1 + br2 + br3 + br4;
};

console.log(sabiranje4broja(1,2,3,4))
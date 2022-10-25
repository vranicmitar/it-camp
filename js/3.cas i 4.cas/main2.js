// OPERATORI U JS
// Podelicemo operatore u 6 grupa:

// 1. Aritmeticki operatori (Aritmetic operators);
// 2.Operatori dodele vrednosti (Assigment operators);
// 3.String operatori (String operators);
// 4.Operatori poredjenja (Comparison operators);
// 5.Logicke operatore (Logical operators);
// 6.Tip operatora (Type operators).

// PRIMERI:

// 1. Aritmeticki operatori (Aritmetic operators);
// 1.1 + OPERATOR sabiranje
console.log(4 + 5);
// 1.2 - OPERATOR oduzimanje
console.log(-15 - 10);
// 1.3 * OPERATOR mnozenje
console.log(5 * 5);
// 1.4 / OPERATOR deljenja
console.log(20 / 5);
// 1.5 ** OPERATOR stepenovanja
console.log(5 ** 3);
// 1.6 % OPERATOR modula (ostatak pri deljenju)
console.log(12 % 5); // rezultat je 2
console.log(12 % 6); // rezultat je 0

// Uslov za parnost :
// i % 2 = 0;
// Uslov za neparnost :
// i % 2 = 1;

// 1.7 % OPERATOR Increment (povecava vrednost za 1)
let g = 5;
// postfiksni operator !!!
g++; // g = g + 1
console.log(g);

let y = 11;
// prefiksni operator !!!
console.log(++y);

// 1.8 % OPERATOR Decrement (smanjuje vrednost za 1)
let u = 99;
// postfiksni operator !!!
u--;
console.log(u);

let w = 65;
// prefiksni operator !!!
console.log(--w);

// 2. Operatori dodele vrednosti (Assigment operators);
// 2.1  =  - dodeljivanje vrednosti nekoj promenljivoj 
// 2.2  += - dodavanje odredjene vrednosti na postojecu promenljivu

    w += 5; // w = w + 5;
    console.log(w);
// 2.3 -=  - oduzimanje odredjene vrednosti na postojecu promenljivu

    // g -= 3;
    // console.log(z); 

// 2.4 *=  - mnozenje odredjene vrednosti na postojecu promenljivu

// g *=2;

// 2.5 /= - deljenje odredjene vrednosti na postojecu promenljivu
// g /=2;

// 2.6 %= - modul odredjenje vrednosti na postojecu vrednost

// x %=2; // x = 6 % 2 = 0
// console.log(x);

// 2.7 **= - stepenovanje odredjene vrednosti na postojecu promenljivu

y **=2;
console.log(y);

// 3.String operatori (String operators);

// Jedan od nacina za spajanje stringova je koriscenjem + operatora.

let prvideo = "Danas je Omar";
let drugideo = "doneo pizzu.";
console.log(prvideo + " " + drugideo);  // + " " + spejs u JS
console.log(Boolean(prvideo + " " + drugideo));

// Neki slucajevi kod sabiranja : 
console.log("Omar" + " " + 3); // rezultat spajanja stringa i broja je UVEK STRING !!!
console.log(3 + " " + "Omar");
console.log(typeof(3 + " " + "Omar"));
console.log(3 +  "2"); // spajanje  bez obzira sto je plus - rezultat je 32 zato sto ga program cita kao string  // SAMO KOD PLUSA VAZI OVO
// console.log(3 +  2); // sabiranje

// JS ce pokusati da prevede string u broj i da izvrsi racunsku operaciju...

console.log(4 -"2");
console.log(4 *"2");
console.log("3" / 1);
console.log(4 **"2");
// U slucaju da JS ne uspe da pretvori string u broj rezultat ce biti NaN...
console.log(21 / "7dana");  //Rezultat je NaN (Not a Number) je vrednost za nekorektan broj.


// 4.Operatori poredjenja (Comparison operators);

// 4.1 ==  - provera jednakosti vrednosti

let a = 5;
let b = 7;
let c = a;
console.log(a == c); // true
console.log(a == b); // false
c+=2;
console.log(c);  // ima novu vrednost : 7
console.log(a); // ostaje stara vrednost : 5

// 4.2 ===  - proverava jednakost tipa i jednakost vrednosti

let d = "5";
console.log(a == d);
console.log(a === d); // pritom proverava i tip

// 4.3 != - proverava razlicitost vrednosti

console.log(b != c);

// 4.4 !== - ispituje da li je razlicita vrednost ili razlicit tip  // mora samo jedan uslov da ispuni da bi bilo true uostalom je false

console.log(a !== d);

// 4.5 > - da li je prva vrednost veca od druge : 

console.log(b > c);  // true 

// 4.6 < - da li je prva vrednost manja od druge : 

console.log(14 < -9);

// 4.7 >= - da li je prva vrednost veca ili jedanka drugoj :

console.log(9>=9);

// 4.8 >= - da li je prva vrednost manja ili jedanka drugoj :

console.log(9 <= 13);

// 4.9  ?  - ternarni operator 

// uslov ?  (radnja koja se izvrasava ako je uslov zadovoljen) 
        // :
        // (radnja koja se izvrsava ako uslov nije zadovoljen)

let isSunny = false;

isSunny ? console.log("Vreme je suncano." + "Ponesite naocare!") 
: console.log("Vreme je kisovito." + "Ponesite kisobrane!");

// 5.Logicke operatore (Logical operators);

// &&  - and (odnosno i) - zahteva zadovoljavanje svih uslova 

let prom1 = 4;
let prom2 = 19;
let prom3 = -3;

prom1 > 0 && prom2 > 0 && prom3 > 0 
? console.log("Sve tri promenljive su pozitivni bojevi")
: console.log("Nisu sve tri promenljive pozitivni broj");

//  ||  - or (odnosno ili) - zahteva zadovoljavanje bar  jednog od ponudjenih uslova 

let prom4 = -15;
let prom5 = -75;
let prom6 = -83;

prom4 > 0 || prom5 > 0 || prom6 > 0 
? console.log("Nasli smo jednu bar jednu koja je veca od 0")
: console.log("Nismo nasli promenljivu koja je veca od 0"); // rezultat


//  !  - not (okrece vrednost => iz true u false i obrnuto)

console.log(!Boolean(prvideo + " " + drugideo));


// 6.Tip operatori (Type operators);

// 6.1  typeof - se koristi za ispitivanje tipa odredjene promenljive

isSunny = false;
console.log(typeof isSunny);

// 6.2  instanceof - se koristi za proveru da li je neka promenljiva instanca objekta


const obj = {
    ime: "Omar",
    prezime: "Semsovic"
};

console.log (  obj instanceof Object )  // rezultat - true.


// 1. var
var x;  // deklarisanje promenljive x (obezbedjivanje lokacijske memorije za promenljivu x)
x = 15; // inicalizacija promenljive x (dodela vrednosti vec deklarisanoj promenljivoj x)
// var x = 15; takodje dozvoljeno
console.log(x);

// Redeklarisanje promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru.
var x = 22; 
// Reinicalizacija promenljive x definisane putem var keyword je dozvoljeno bilo gde u prostoru.
x = 22;

// 2. let - definisanje promenljive za koju postoji mogucnost promene vrednosti 
let y; // deklarisanje promenljive y (obezbedjivanje lokacijske memorije za promenljivu y)
y = 14; // inicalizacija promenljive y (dodela vrednosti vec deklarisanoj promenljivoj y)
// let y = 14;  - jeste dozvoljeno 
console.log(y);
// let a,b,c; - korektan nacin deklarisanja promenljivih 

// Redeklarisanje definisane putem let keyword nije dozvoljeno ako se radi o istom prostoru.
// let y; - nije dozvoljeno ponovno deklarisanje
y = 39;
console.log(y);
// Reinicalizacija promenljive y definisane putem keyword je dozvoljeno u bilo kom prostoru.

// Promenljive koje su desinisane putem let ili const nam obezbedjuju Block Scope.
{
    // console.log(y); - prepoznaje se promenljiva iz Global Scope.
    // Redeklaracija promenljive je dozvoljena u drugom prostoru. 
    let y = 23;
    console.log(y);
}
// Ispisuje se 39 odnosno poslednje dodeljena vrednost unutar Global Scope.
console.log(y);

// 3. const
// Promenljive definisane putem const moraju biti odjedonom deklarisane i inicijalizovane.
// const z;
// z = 26;

const z = 26;
console.log(z);

// NIJE DOZVOLJENA NI REDEKLARACIJA NI REINICALIZACIJA...

// NIJE DOZVOLJENO REDEKLARISANJE PUTEM CONST KADA SE RADI U ISTOM PROSOTU.
// const z = 23; 
// REINICIJALIZACIJA NIJE DOZVOLJENA PUTEM CONST TAKODJE KADA SE RADI O ISTOM PROSTORU.
// z = 23;
// console.log(z);

// Sve karakteristike koje vaze za promenljive definisane putem let u BLOCK SCOPE vaze i za promenljive definisane putem const keyword.

// const cars = ["Audi","bmw","golf","mercedes"];


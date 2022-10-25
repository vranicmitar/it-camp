// INTERAKCIJA SA KORISNIKOM 

// promt() mretoda nam sluzi za kominikaciju sa korisnikom.

const ime = prompt("Unesite vase ime: ");
console.log(ime);

const godine = prompt("Unesite vase godine: ");
console.log(godine);
console.log(typeof godine);
// Sad je potrebno pretvoriti string u broj -->

// Postoje dva nacina prevodjenja stringa u broj:

// 1. Number(promenljiva)
const brGodina = Number(godine);
console.log(brGodina);
console.log(typeof brGodina);

// 2. +promenljiva
const brGodina2 = +godine;
console.log(brGodina2);
console.log(typeof brGodina2);  

const visina = +prompt("Unesite svoju visinu u cm: ");
console.log(visina);
console.log(typeof visina);  
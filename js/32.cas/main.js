// callback funkcije //
// predstavlja funkciju koju saljemo kao argument neke druge funkcije
// Sam argument ne treba da bude izvrsavanje callbask funkcije vec refeerenca na datu radnju.

function glavnaFukcija(func) {
  console.log("Radnja unutar glavne funkcije");
  func();
  console.log("Kraj glavne funkcije");
}

function callback() {
  console.log("Radnja unutar glavne funkcije");
}

glavnaFukcija(callback);

// Napraviti galvnu funkciju unutar koje ce se desiti ispis  sta ona predstavlja a celi stvar ce da izvrsi callback funkcija.
// Callback funkcija ima dva parametra i ispisuje rezultat par1 stepenovan par2.

const mainFunction = () => {
  console.log("Prvi broj stepenovan sa drugim je:");
  callback2(2, 3); // ovde je unos parametara (gde pozivamo funkciju)
};
const callback2 = (par1, par2) => {
  console.log(par1 ** par2);
};

mainFunction(callback2);

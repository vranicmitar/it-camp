const glavnaFunkcija = (sporedna) => {
  console.log("Glavna f-ja : ");
  sporedna(1, 2, 3);
};

const druga = (a, b, c) => {
  console.log((a + b + c) / 3);
};

glavnaFunkcija(druga);

//////////////////////////////////////////////////

// CLOSURE FUNKCIJE \\

// Poznata je cinjen9ca da kada se izvrsi f-ja sve njene lokalne promenljive pokupi garbage colector i one prestaju da postpoje u memoriji
// Medjutim to nije slucaj za f-je cije promenljive zahteva neka druga funkcija

// Closure je f-ja koja ima pravo pristupa promenljivim iz domena druge f-je
// To se najcesce postize ugradjivanjem f-je umutar druge f-je nakon cega se poztize tzv. Block chain.

function first() {
  const prom1 = "Hi";
  return `${prom1} guys`;
}

console.log(first());
// console.log(prom1);

function second() {
  const a = 5;
  const b = 9;
  function closure(c) {
    return a * c;
  }
  return closure(3);
}
console.log(second());

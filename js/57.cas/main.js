const input = document.querySelector(`input`);
const button = document.querySelector(`#prvibutton`);

let score = 20;
let highscore = 0;
let tajniBroj = Math.trunc(Math.random() * 20) + 1;

const poruka = function (poruka) {
  document.querySelector(".poruka").textContent = poruka;
};

button.addEventListener(`click`, function () {
  if (input.value > 20) {
    poruka(`Brojevi se pogadjaju od 1 do 20`);
  } else if (input.value === tajniBroj) {
    poruka(`Pogodili ste broj`);
  } else if (input.value > tajniBroj) {
    poruka(`Previse visoko ste nagadjali !`);
  } else if (input.value < tajniBroj) {
    poruka(`Previse nisko ste nagadjali !`);
  }
});

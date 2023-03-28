const input = document.querySelector(`input`);
const button = document.querySelector(`#prvibutton`);
const againButton = document.querySelector(`#again-button`);

let score = 20;
let highscore = 0;
let tajniBroj = Math.trunc(Math.random() * 20) + 1;

const poruka = function (poruka) {
  document.querySelector(".poruka").textContent = poruka;
};

button.addEventListener(`click`, function () {
  const broj = Number(document.querySelector(`.broj`).value);
  if (broj > 20 || input.value === "") {
    poruka(`Morate uneti broj od 1 do 20 !!!`);
  } else if (broj === tajniBroj) {
    poruka(`Pogodili ste broj`);
    document.querySelector(
      `body`
    ).style.backgroundImage = `linear-gradient(to left, red, yellow)`;
  }

  if (score > highscore) {
    highscore = score;
    document.querySelector(`.highscore-span`).textContent = highscore;
  } else if (broj !== tajniBroj) {
    if (score > 1) {
      poruka(broj > tajniBroj ? `Previse visoko ` : `Previse nisko`);
      score--;
      document.querySelector(`.score-span`).textContent = score;
    } else {
      poruka(`Izgubili ste`);
      document.querySelector(`.score-span`).textContent = 0;
    }
  }
});

againButton.addEventListener(`click`, function () {
  score = 20;
  tajniBroj = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score-span").textContent = score;
  document.querySelector(".broj").value = "";
  document.querySelector(
    `body`
  ).style.backgroundImage = `linear-gradient(to right, red, yellow)`;
});

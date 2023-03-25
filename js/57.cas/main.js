// var tajniBroj = Math.floor(Math.random() * 20) + 1;

// function provjeriBroj() {
//   // Spremi korisnički unos u varijablu
//   var korisnickiBroj = document.getElementById("korisnickibroj").value;

//   // Provjeri je li korisnički unos ispravan
//   if (korisnickiBroj < 1 || korisnickiBroj > 20 || isNaN(korisnickiBroj)) {
//     alert("Unesite valjan broj od 1 do 20!");
//     return;
//   }

//   // Provjeri je li korisnički unos jednak tajnom broju
//   if (korisnickiBroj == tajniBroj) {
//     alert("Bravo! Pogodili ste tajni broj!");
//   } else if (korisnickiBroj < tajniBroj) {
//     alert("Previše nisko. Pokušajte ponovno.");
//   } else {
//     alert("Previše visoko. Pokušajte ponovno.");
//   }
// }

let button = document.querySelector(`#button`);
let input = document.querySelector(`#korisnickibroj`);

button.addEventListener(`click`, buttonClicked);

function buttonClicked(e) {
  e.preventDefault();
  let korisnickibroj = input.value;
  let tajniBroj = Math.floor(Math.random() * 20) + 1;
  if (korisnickibroj < 1 || korisnickibroj > 20 || isNaN(korisnickibroj)) {
    alert(`Unesite broj od 1 do 20`);
    return;
  }

  if (korisnickibroj === tajniBroj) {
    alert(`Bravo! Pogodili ste tajni broj`);
  } else if (korisnickibroj < tajniBroj) {
    alert(`Previse nisko`);
  } else {
    alert(`Previse visoko`);
  }
}

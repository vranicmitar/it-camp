// KONDICIONALI -->

// if (uslov1) {
//     // kod za izvrsavanje u slucaju ispunjenja  prvog uslova
// }
// else if(uslov2) {
//     // kod za izvrsavanje u slucaju ne zadovoljavanja uslova
// }
// else {
//     // kod za izvrsavanje u slucaju ne zadovoljavanja uslova
// }


// Ako je broj godina unet od strane korisnika >= 18 ," punoletni" ste u suprotnom "maloletni"...

// const godine = Number(prompt ("Unesite broj godina:"));
// if(godine >=18){
//     console.log("Punoletni ste");
// }
// else if(godine <18 && godine > 0) {
//     console.log("Maloletni ste")
// }
// else if (godine < 0){
//     console.log("Broj godina ne moze biti negativan")
// }
// else{
//     console.log("Niste uneli broj godina");
// }

const godine2 = Number(prompt("Unesite broj godina: "));
if(godine2 < 12){
    console.log("Vi ste decijeg doba");
}
else if (godine2 >=12 && godine2 <18){
    console.log("Vi ste maloletni");
}
else if(godine2 >=18 && godine2 < 40){
    console.log("Vi ste punoletni")
}
else if(godine >= 40){
    console.log("Vi ste zrelog doba");
}
else {
    console.log("Niste uneli broj godina");
}

// Switch naredba
// Sintaksa:
// switch (izraz) {
//   case x:
// Blok koda koji se izvrsava u slucaju da je izraz = x
// break;
// break se ne sme izostaviti, jer bi se izvrsio kod narednog slucaja
// sto svakako nije nesto sto zelimo da se desi.
//   case y:
// Blok koda koji se izvrsava u slucaju da je izraz = y
// break;
//   case z:
// Blok koda koji se izvrsava u slucaju da je izraz = z
// break;
//   default:
// Blok koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y, ni z.
// }

// ukljucuje se i 12 i 15
const broj = +prompt("Unesite broj izmedju 12 i 15: ");
switch (broj) {
  case 12:
    console.log("Unet je broj 12.");
    break;
  case 13:
    console.log("Unet je broj 13.");
    break;
  case 14:
    console.log("Unet je broj 14.");
    break;
  case 15:
    console.log("Unet je broj 15.");
    break;
  default:
    console.log("Nije unet trazeni broj.");
}

// Domaci zadaci:
// 1.
// Napisati program koji na osnovu dva uneta broja od strane korisnika ispisuje:
// Povrsinu kvadrata ako su uneti brojevi jednaki,
// Povrsinu pravougaonika ako su uneti brojevi razliciti.

// 2. Zadatak
// Korisnik unosi dva realna broja x i y. Napisati program koji izracunava i stampa
// kolicnik x/y, ako je broj y razlicit od nule,
// a inace ispisuje poruku: Deljenje je nemoguce.
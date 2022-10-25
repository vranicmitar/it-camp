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
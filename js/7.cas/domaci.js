// Domaci zadatak:
// Preko switch naredbe:
// console.log(new Date().getDay());
// getDay() - daje vrednost 0-6
// switch (new Date().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend" 

// const dani = +prompt("Unesite broj vaseg omiljenog dana od 0-6: ");
// switch (dani) {
//   case 0:
//     console.log("Ugodno provedite vikend");
//     break;

//   case 1:
//     console.log("Danas je radan dan");
//     break;

//   case 2:
//     console.log("Danas je radan dan");
//     break;

//   case 3:
//     console.log("Danas je radan dan");
//     break;

//   case 4:
//     console.log("Danas je radan dan");
//     break;

//   case 5:
//     console.log("Danas je radan dan");
//     break;

//   case 6:
//     console.log("Ugodno provedite vikend");
//     break;
      
//     default:
//     console.log("Niste uneli odgovarajuci broj od 0 - 6 !!!");
// }


// 2. nacin -->

switch (new Date().getDay()) {
  case 1:
    console.log("Danas je ponedeljak");
    break;
  case 2:
    console.log("Danas je utorak");
    break;
  case 3:
    console.log("Danas je ponedeljak");
    break;
 case 4:
    console.log("Danas je radan dan");
    break;

  case 5:
    console.log("Danas je radan dan");
    break;
  
  default:
    console.log("Ugodno provedite vikend.");
}
const dan = prompt("Unesite dan: ");
switch (dan) {
  case ponedeljak:
    console.log("Danas je 'radni dan'");
    break;
  case utorak:
    console.log("Danas je 'radni dan'");
    break;
  case sreda:
    console.log("Danas je 'radni dan'");
    break;
  case cetvrtak:
    console.log("Danas je 'radni dan'");
    break;
  case petak:
        console.log("Danas je 'radni dan'");
        break;
   case subota:
    console.log("Ugodno provedite vikend" );
    break; 
    case nedelja:
        console.log("Ugodno provedite vikend" );
        break;  
  default:
    console.log("Nije unet trazeni dan.");
}


// Domaci zadatak:
// Preko switch naredbe:
console.log(new Date().getDay());
// getDay() - daje vrednost 0-6
// switch (new Date().getDay())...
// Na osnovu vrednosti koju nam daje izraz iz switch naredbe, kroz case_ove i eventualno default ispisati poruku:
// "Danas je 'radni dan'"
// "Ugodno provedite vikend" 
// TRUHTY AND FALSY VALUES
const isSunny = false;


if (isSunny) {
    console.log("Napolju je suncacno");
} else {
    console.log("Napolju je kisa");
}

// Postoji samo 8 FALSY vrednosti i one su:

// 1. false;
// 2. "";
// 3. 0;
// 4. -0;
// 5. 0n;
// 6. undefiend;
// 7. null;
// 8. NaN


// Napraviti funkciju gde se trazi unos od strane korisnika i vraca poruka da li je uneta vrednost THRUTHY ili FALSY vrednost.

function funkcija () {
    const poruka = +prompt("");  // ako stavimo plus i upisemo slovo izbacice falsy zbog 8.falsy vrednosti

    if (poruka) {
        return "Truthy"
    } else {
        return "Falsy"
    }
}

console.log(funkcija());



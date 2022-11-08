// Napraviti novu recenicu koja ce imati isti text, ali bez razmaka.

let recenica = "Omare jesi li spremio test?";
let duzina = recenica.length;
let novarecenica = "";

for (i = 0; i < duzina; i++) {
    if (recenica[i] !== " " ) {
        novarecenica +=recenica[i];
    }
}
console.log (novarecenica);

// brojanje razmaka --->

let recenica2 = "Omare jesi li spremio test?";
let brojac = 0;

for (i = 0; i <= recenica2.length; i++) {
    if (recenica2[i] === " ") {
        brojac++;
    }
}
console.log(brojac);

// Napraviti novu recenicu gde ce umesto slova "a" pisati "t". Dok ce se posle slova "a" malazi slovo "n" pisace "d" umesto "a".

let recenica5 = prompt("Unesi neku recenicu:") ;
let duzina5 = 0;
let novarecenica5 = "";

for (i = 0; i < duzina5; i++) {
    if (recenica[i] === "a" && recenica5[i+1] === "n" ) {
        novarecenica5 += "d";
    } else if (recenica5[i] === "a") {
       novarecenica5 += "t";
    } else {
        novarecenica5 += recenica5[i]; 
    }
}
console.log (novarecenica5);





// 1.  Prebrojati koliko se puta u unetom stringu pojavljuje slovo "M" (veliko i malo). Npr. za string 'Mama ima momu' , dobija se rezultat 5.

const recenica = "Mama ima momu" ;
let duzina = recenica.length;
let brojac = 0;

for (i = 0; i < duzina; i++) { 
    if (recenica[i] === "m" || recenica[i] === "M") {
        brojac++;
    }
}
console.log("U recenici 'Mama ima momu' ima " + brojac + " slova  velikih i malih 'M'.");

// 2 nacin --> 

const r = prompt("Unesite neki string: ");
let br = 0;
let b = 0; 
while (b < recenica.length) {
    if (r[b] === "m" || r[b] === "M") {
        br++;
    }
    b++;
}
console.log(br);

// 2.  Prebrojatin koliko ima znakova koji su cifre u unetom stringu.

const recenica1 = prompt("Unesite bilo koju recenicu koja ima cifre i neka slova:  ");
let duzina1 = recenica1.length;
let brojac1 = 0;

for (i = 0; i < duzina1; i++) {
    if (recenica1[i] >= "0" && recenica1[i] <= "9") {
        brojac1++;
    }
}
console.log(recenica1 + " -ovde ima " +brojac1+ " cifara");


// 2 nacin -->

const r2 = prompt("Unesite neki string: ");
let br2 = 0;
for (i = 0; i <= r2.length-1; i++) {
    if (isNaN(r2[i])) {
        continue;
    } else {
        br2++;
    }
}

console.log(br2++);



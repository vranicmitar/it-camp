let recenica = prompt("Unesi neku recenicu: ");
const duzina = recenica.length;

for (i = 0; i < duzina; i++) {
    if (recenica[i] === "a") {
        console.log(5);
    } else if (recenica[i] === "s") {
        continue;
    }
    else {
        console.log(recenica[i]);
    }
}
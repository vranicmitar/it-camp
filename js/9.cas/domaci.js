let recenica = String("Unesi neku recenicu: ");
const duzina = recenica.length;

for (i = 0; i < duzina; i++) {
    if (recenica[i] === "a") {
        
    } else if (recenica[i] === "s") {
        continue;
    }
    console.log(recenica[i]);
}
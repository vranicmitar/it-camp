const povrsina = (a,b) => {
    if(a === b) {
        return a*a;
    } else {
        return a*b;
    }
}
console.log(povrsina(3,6));



function pov(a,b) {
    if(a === b) {
        return a*a;
    } else {
        return a*b;
    }
}
console.log(pov(5,10));


// Postoje 3 metode za ekstraktovanje stringa:
// 1. slice (start, end); ima negativno pristupanje (moze uzeti unazad string)
// 2. substring (start, end) ima pozitivno pristupanje
// 3. substr (start, lenght)

// Racunanje ide od 0.

const string7 = "Danas je lepo vreme.";
console.log(string7.slice(0,5));
console.log(string7.substring(5,10));

console.log(string7.substr(5,10));


// DOMCAI - Svaki poklon sadrzi tacno k cokoladica.Ako na raspolaganju imamo ukupno n cokoldaica,koliko poklona je moguce zapakovati?
// Ulaz - ucitavacju se dva cela broja...
// *- k (1<= k <= 20) - ukupan broj cokoladica u jednom poklonu
// *- n (0<= n <= 1000) - ukupan broj cokoladica

function cokolada(par1, par2) {
    const ukupnoCokolada = Math.floor(par2 / par1);
    if (par1 < 1 || par1 > 20 || isNaN(par1)) {
        return "Broj cokoladica u jednom poklonu mora biti izmedju 1 i 20 cokoladica!!!"
    }else if (par2 > 1000 || par1 <= 0 || isNaN(par2)) {
        return "Ukupan broj cokoladica mora biti izmedju 0 i 1000"
    } else {
        return "Moguce je zapakovati "  + ukupnoCokolada + " " + "poklona.";
    }
}

console.log(cokolada(4,19));



// preko arrow fnctn

const cokolada1 = (br1,br2) => {
    const ukupnoCokolada = Math.floor(br2 / br1);
    if (br1 < 1 || br1 > 20 || isNaN(br1)) {
        return "Broj cokoladica u jednom poklonu mora biti izmedju 1 i 20 cokoladica!!!"
    }else if (br2 > 1000 || br2 <= 0 || isNaN(br2)) {
        return "Ukupan broj cokoladica mora biti izmedju 0 i 1000"
    } else {
        return "Moguce je zapakovati "  + ukupnoCokolada + " " + "poklona.";
    }
}
console.log(cokolada1(5,25));

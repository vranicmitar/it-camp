// Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci (odvojenih razmakom0) unetog strigna.NPR. za A= "Svuda podji kuci dodji"
// dobi se B="Svuda dodji".Podrazumeva se uneti string nema vodece ili pratece razmake.

function string(recenica) {
    const index = recenica.indexOf(" ");
    const prvaRec = recenica.slice(0, index);
    const index1 = recenica.lastIndexOf(" ");;
    const poslednjaRec = recenica.slice(index1);
    const recenica2 = prvaRec.concat(poslednjaRec);
    return recenica2;
}
console.log(string("svuda podji kuci dodji"));


// Za uneti string A treba izdvojiti podstring,koji pocinje od unete pozicijen N i ima M znakova


const izdvojiti = (string, pocetak, duzina) => {
    let string2 = "";
    string2 = string.substr(pocetak,duzina);
    return string2;
}

console.log(izdvojiti("Pera ima devojku", 5,9))

// Unosi se string A i znak Z.Kreirati novi string B koji se dobija tako sto se iz unetog stringa izbacuje pojava znaka Z.Npr.



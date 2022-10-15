document.getElementById("paragraf").innerHTML =
"Ovo je paragraf unet naknadno .";

paragraf = document.getElementById("paragraf")
paragraf.style.backgroundColor = "red";

paragraf = document.getElementById("paragraf") 
paragraf.style.color = "yellow";

paragraf = document.getElementById("paragraf") 
paragraf.style.padding = "45px";

console.log("Ovo je nas prvi ispis u conzoli");

// Tipovo podataka u JS 

// Za proveru tipa neke promenljive odnosono (variable) se koristi typeof operator.

// Primitivni tipovi podataka:

    // 1. String - niz karaktera koji je zapisan unutar navodnika (obicinih ili duplih)
    
    console.log("Ovo je neki string unutar duplih navodnika");
    console.log(typeof "Ovo je neki string unutar duplih navodnika");

    // 2. Number - predstavlja broj koji moze biti zapisan sa ili bez decimalnog zareza odnosono zareza.
    // Ne pravi se razlika izmedju celih, realnih ili komplesnih brojeva.

    console.log(15);
    console.log(typeof 15);

    console.log(-5.67);
    console.log(typeof -5.67);

    // 3. BigInt - se koristi za skladistenje brojeva cija granica prelazi granicu.
    // number tipa podatka

    console.log(BigInt(654684984984984984894984984));
    console.log(typeof BigInt(654684984984984984894984984));

    // 4. Boolean - logicki entitet koji moze da ima dve vrednosti:
    // true,
    // false.
    // Najcesce se koristi u kondicionalima (if naredbe) i ima veliku primenu.

    daLiPadaKisa = false;

    console.log(true);
    console.log(typeof true);

    console.log(daLiPadaKisa);

    // 5. undefined - je tip podatka koji se javlja kada imamo deklarisanu neku promenljivu ali joj nismo dodelili vrdnost.
    // U tom slucaju i vrednost i tip promenljive je undefined.

    let prom1;  // deklarisanje promenljive 
    prom1 = 54; // inicalizacija ( odnosno dodela) promenljive

    // 6. null - je tip podatka za nepostojecu promenljivu ili za promenljivu kojoj smo dodelili nekorektnu vrdnost.

    let skola = null;
    console.log(skola);
    console.log(typeof skola);  // rezultat je Object
    
    // 7. Symbol - novi tip podatka u JS koji se koristi za dodeljivanje jedinstvene ili anonimne vrednosti.

    x = Symbol("Danas je lepo vreme.");
    console.log(x);
    y = Symbol("Danas je lepo vreme.");
    console.log(y);

    console.log(x === y);  // razlikuju se 

    // PRIMITIVNI TIPOVI PODATAKA SE KORISTE KADA IMAMO PROMENLJIVU ODNOSNO VARIJABLU SA SAMO JEDNOM VREDNOSCU


// Neprimitivni tipovi podataka:

// ZA PROMENLJIVE (VARIJABLE) KOJE MOGU SKLADISTITI VISE VREDNOSTI, ILI NEKE KOMPLEKSNE VREDNOSTI 
//  SE KORISTE NEPRIMITIVNI TIPOVI PODATAKA.

// Kada ispitujemo tip podatka za neku neprimitivnu promenljivu u JS dobijamo Object za tip.

    // 1. Nizovi (Arrays) - neprimitivni tip podatka koji nam sluzi za skladistenje vise vrednosti.
    // U JS niz moze sadrzati elemente razlicitog tipa.

    niz1 = ["Mitar", "Dzenan", "Haris", "Hamed", "Nikola"];
    console.log(niz1);

    niz2 = ["Hamed", 15, false];
    console.log(niz2);

    // Jos jedan nacin definisanja niza:
    
    niz3 = new Array("Mitar", "Dzenan", "Haris", "Hamed", "Nikola");
    console.log(niz3);

    // 2. Objekti (Object) - su GLAVNI neprimitivni tip podatka u JS.
    // Objekti se zapisuju po principu name:value pair (ime:vrednost par).

    obj1 = {
        ime: "Mehmed",
        prezime: "Kucevic",
        godine: 15,
        skola: "Medicinska skola",
        punoletnost:false
    }

    console.log(obj1.godine);

    // 3. Setovi (Sets) - slicni nizovima sa razlikom da set ne moze da sadrzi duplikate.
    set1 = new Set(["Alen", "Hasan", "Miona","Amir", "ALen"]); // nisu dozvoljeni duplikati
    console.log(set1);
    
    // 4. Mape (Maps) - su slicni objektima sa nesto drugacijim nacinom definisanja.

    map1 = new Map([
        ["jabuke", 50],
        ["kruske", 60],
        ["jagode", 80]
    ])
    
    console.log(map1);
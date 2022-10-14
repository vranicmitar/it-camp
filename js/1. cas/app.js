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



    console.log (typeof);

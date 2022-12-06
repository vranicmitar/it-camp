function limunada(par1, par2) {
    const ukupnoFlasa = Math.floor(par2 / par1);
    if (par1 > 5 || par1 <= 0 || isNaN(par1)) {
        return "Zapremina flase mora biti izmedju 0 i 5 litara"
    }else if (par2 > 50 || par1 <= 0 || isNaN(par2)) {
        return "Zapremina limunade mora biti izmedju 0 i 50 litara"
    } else {
        return "Sa datim zapreminama mozemo napuniti "  + ukupnoFlasa + " " + "falsa limunade."
    }
}

console.log(limunada(1.5,10));
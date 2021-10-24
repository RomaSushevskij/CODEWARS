//first solve
function twiceAsOld_1(dadYearsOld, sonYearsOld) {
    let dadStart = dadYearsOld;
    let sonStart = sonYearsOld;
    if (dadYearsOld / sonYearsOld == 2) {
        return 0;
    } else if (dadYearsOld / sonYearsOld > 2) {
        do {
            dadYearsOld += 1;
            sonYearsOld += 1
        }
        while (dadYearsOld / sonYearsOld > 2)
        return dadYearsOld - dadStart;
    } else if (dadYearsOld / sonYearsOld < 2) {
        do {
            dadYearsOld -= 1;
            sonYearsOld -= 1
        }
        while (dadYearsOld / sonYearsOld < 2)
        return dadStart - dadYearsOld;
    }
}

//second solve
function twiceAsOld_2(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld)
}
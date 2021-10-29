var humanYearsCatYearsDogYears = function (humanYears) {
    let catYears = humanYears > 2 ? 24 + (humanYears - 2) * 4 : humanYears > 1 ? 24 : 15;
    let dogYears = humanYears > 2 ? 24 + (humanYears - 2) * 5 : humanYears > 1 ? 24 : 15;
    return [humanYears, catYears, dogYears];
}

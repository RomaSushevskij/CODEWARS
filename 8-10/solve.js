octalTtoDecimal = (str) => {
    return str.split("").reduce((result, current, index) => current * 8**(str.split("").length - index - 1) + result, 0)
}
octalTtoDecimal("1457");
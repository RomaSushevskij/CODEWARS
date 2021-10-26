function isDigit(s) {
    if (typeof s != "string") {
        return false
    }
    return !isNaN(s) && !isNaN(parseFloat(s))
}
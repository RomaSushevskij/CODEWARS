function arrayMadness(a, b) {
    return a.reduce((sum, item) => sum + item ** 2, 0) >
    b.reduce((sum, item) => sum + item ** 3, 0) ? true : false
}
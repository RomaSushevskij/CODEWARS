function sumMix(x) {
    return x.map(item => parseInt(item)).reduce((sum, item) => item + sum, 0)
}
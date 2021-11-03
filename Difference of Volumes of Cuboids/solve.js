function findDifference(a, b) {
    return Math.abs(a.reduce((volume, item) => item * volume, 1) - b.reduce((volume, item) => item * volume, 1))
}
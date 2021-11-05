function pointsPer48(ppg, mpg) {

    return mpg > 0 ? +(48 * ppg / mpg).toFixed(1) : 0
}
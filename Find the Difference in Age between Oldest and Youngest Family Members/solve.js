function differenceInAges(ages) {
    let young = ages.sort((x, y) => x - y)[0];
    let old = ages.sort((x, y) => y - x)[0];
    return [young, old, old - young]
}
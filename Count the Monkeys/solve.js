function monkeyCount(n) {
    return Array(n).fill(1).map((item, index) => item + index)
}
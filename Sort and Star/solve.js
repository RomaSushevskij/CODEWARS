function twoSort(s) {
    return s.sort()[0].split("").map((el, index) => (index == s.sort()[0].length - 1) ? el : `${el}***`).join("")
}
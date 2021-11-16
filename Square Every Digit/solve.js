function squareDigits(num) {
    return +num.toString().split("").map(item => +item * +item).join("")
}
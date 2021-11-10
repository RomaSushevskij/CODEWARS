function superSize(num) {
    return +num.toString().split("").sort((x, y) => y - x).join("")
}
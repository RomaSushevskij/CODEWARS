function noBoringZeros(n) {
    if (n === 0) {
        return 0
    }
    let strArr = n.toString().split("")
    for (let i = strArr.length - 1; i >= 0; i -= 1) {
        if (strArr[i] === "0") {
            strArr.pop()
        } else {
            return +strArr.join("")
        }
    }
}
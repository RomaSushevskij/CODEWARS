function sumArray(array) {
    if (!array) {
        return 0
    }
    let arr = array.sort((x, y) => x - y)
    arr.pop()
    arr.shift()
    return arr.reduce((sum, item) => item + sum, 0)
}
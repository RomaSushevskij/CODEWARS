var summation = function (num) {
    return Array(num).fill(1).map((item, index) => item + index).reduce((sum, item) => sum + item, 0)
}


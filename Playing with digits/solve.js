function digPow(n, p) {
    const numAsArr = n.toString().split('').map(n => Number(n))
    const resNum = numAsArr.reduce((sum, num, ind) => num ** (p + ind) + sum, 0)
    return Number.isInteger(resNum / n) ? resNum / n : -1
}

digPow(89, 1)
digPow(92, 1)
digPow(46288, 3)
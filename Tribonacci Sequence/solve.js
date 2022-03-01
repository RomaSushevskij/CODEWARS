function tribonacci(signature, n) {
    let resultArr = []
    if (n === 0) {
        return resultArr
    }
    if (n <= 3) {
        for (let i = 0; i < n; i++) {
            resultArr.push(signature[i])
        }
        return resultArr
    }
    resultArr = [...signature]
    for (let i = 3; i <= n - 1; i++) {
        const nextNumArr = resultArr.slice(i - 3, i)
        const nextNum = nextNumArr.reduce((add, n) => n + add, 0)
        resultArr.push(nextNum)
    }
    return resultArr
}

tribonacci([1, 2, 3], 10) //[1,2,3,6,11,20,37,68,125,230])
tribonacci([3, 2, 1], 10) //[3,2,1,6,9,16,31,56,103,190])
tribonacci([1, 1, 1], 1) //[1]
tribonacci([300, 200, 100], 0) //[]

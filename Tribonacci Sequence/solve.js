function tribonacci(signature, n) {
    let resultArr = []
    if (n <= 3) {
        for (let i = 0; i < n; i++) {
            resultArr.push(signature[i])
        }
        return resultArr
    }
    resultArr = [...signature]
    for (let i = 3; i <= n - 1; i++) {
        const nextNumArr = resultArr.slice(-3)
        const nextNum = nextNumArr.reduce((add, n) => n + add, 0)
        resultArr.push(nextNum)
    }
    return resultArr
}

//second solve
function tribonacci(signature, n) {
    let resultArr = []
    if (n <= 3) {
        for (let i = 0; i < n; i++) {
            resultArr.push(signature[i])
        }
        return resultArr
    }
    resultArr = [...signature]
    let [first, second, third] = signature
    for (let i = 4; i <=n ; i++) {
        let next = first + second + third
        resultArr.push(next)
        first = second;
        second = third;
        third = next
    }
    return resultArr
}


tribonacci([1, 2, 3], 10) //[1,2,3,6,11,20,37,68,125,230])
tribonacci([3, 2, 1], 10) //[3,2,1,6,9,16,31,56,103,190])
tribonacci([1, 1, 1], 1) //[1]
tribonacci([300, 200, 100], 0) //[]

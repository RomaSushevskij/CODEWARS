function findEvenIndex(arr) {
    const firstBoard = arr.slice(1).reduce((sum, ind) => ind + sum, 0)
    const lastBoard = arr.slice(0, [arr.length - 1]).reduce((sum, ind) => ind + sum, 0)
    if (firstBoard === 0) {
        return 0
    }
    if (lastBoard === 0) {
        return arr.length - 1
    }
    const resultArr = []
    for (let i = 1; i < arr.length - 1; i++) {
        const leftPart = arr.slice(0, i).reduce((sum, ind) => ind + sum, 0)
        const rightPart = arr.slice(i + 1).reduce((sum, ind) => ind + sum, 0)
        if (leftPart === rightPart) {
            resultArr.push(i)
        }
    }
    if (resultArr.length === 0) {
        return -1
    }
    if (resultArr.length > 1) {
        return [...resultArr].reverse()[0]
    }
    return resultArr[0]
}

findEvenIndex([1, 2, 3, 4, 3, 2, 1])   //3
findEvenIndex([1, 100, 50, -51, 1, 1])   //1
findEvenIndex([1, 2, 3, 4, 5, 6])   //-1
findEvenIndex([20, 10, 30, 10, 10, 15, 35])   //3
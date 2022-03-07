function sortArray(array) {
    if (array.length === 0) {
        return array
    }
    const indexOfOddArr = []
    array.forEach((n, i) => n % 2 !== 0 ? indexOfOddArr.push(i) : null)
    const oddSortArr = array.filter(n => n % 2 !== 0).sort((n, m) => n - m)
    const ansArr = [...array]
    for (let i = 0; i < indexOfOddArr.length; i++) {
        ansArr[indexOfOddArr[i]] = oddSortArr[i]
    }
    return ansArr
}

sortArray([5, 3, 2, 8, 1, 4]) // [1, 3, 2, 8, 5, 4])
sortArray([5, 3, 1, 8, 0]) // [1, 3, 5, 8, 0]);
sortArray([]) //[]);
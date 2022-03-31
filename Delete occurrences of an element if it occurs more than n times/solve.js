function deleteNth(arr, n) {
    const obj = {};
    const resArr = [];
    arr.forEach(el => obj[el] = n)
    arr.forEach(el => {
        if (obj[el] > 0) {
            resArr.push(el)
            obj[el]--
        }
    })
    return resArr
}

deleteNth([20, 37, 20, 21], 1) // [20,37,21])
deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3) // [1, 1, 3, 3, 7, 2, 2, 2])
function moveZeros(arr) {
    let arrWithZeros = []
    const arrWithoutZeros = arr.filter(el => {
        if (el === 0) {
            arrWithZeros.push(el)
        } else {
            return true
        }
    })
    return [...arrWithoutZeros, ...arrWithZeros]
}

moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
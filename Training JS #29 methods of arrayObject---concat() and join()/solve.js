function bigToSmall(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i += 1) {
        newArr = newArr.concat(arr[i])
    }
    return newArr.sort((x, y) => y - x).join(">")


}
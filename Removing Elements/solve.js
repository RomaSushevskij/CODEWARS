function removeEveryOther(arr) {
    return arr.filter((item, index) => index === 0 || index % 2 === 0)
}
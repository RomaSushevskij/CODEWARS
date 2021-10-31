function find_average(array) {
    return array.length == 0 ? 0 : array.reduce((sum, item) => item + sum, 0) / array.length
}
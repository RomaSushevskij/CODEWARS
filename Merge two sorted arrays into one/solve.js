function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.concat(arr2).sort((x, y) => x - y))]
}
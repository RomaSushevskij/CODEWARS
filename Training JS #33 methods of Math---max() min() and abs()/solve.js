function maxMin(arr1, arr2) {
    let ans = arr1.map((item, index) => Math.abs(item - arr2[index]))
    return [Math.max(...ans), Math.min(...ans)]


}
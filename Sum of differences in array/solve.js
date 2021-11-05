function sumOfDifferences(arr) {
    let newArr = arr.sort((x, y) => y - x)
    let result = 0;
    for (let i = 0; i < newArr.length - 1; i++) {
        result += (arr[i] - arr[i + 1])
    }
    return result
}

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a).reduce((o, c, i, a) => {
        if (a.length - 1 > i)
            o += c - a[i + 1];
        return o;
    }, 0) || 0;
}
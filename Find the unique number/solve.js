function findUniq(arr) {
    let repeated;
    if (arr[0] === arr[1] || arr[0] === arr[2]) {
        repeated = arr[0]
    } else if (arr[1] === arr[2]) {
        repeated = arr[1]
    }
    return arr.filter(n => n !== repeated)[0]
}

findUniq([1, 1, 1, 2, 1, 1])
findUniq([0, 0, 0.55, 0, 0])
findUniq([3, 10, 3, 3, 3])


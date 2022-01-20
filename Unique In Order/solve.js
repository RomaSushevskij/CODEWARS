var uniqueInOrder = function (iterable) {
    if (typeof iterable === 'string') {
        return iterable.split('').filter((l, i, arr) => l !== arr[i + 1])
    } else {
        return iterable.filter((l, i, arr) => l !== arr[i + 1])
    }
};
uniqueInOrder('AAAABBBCCDAABBB');
uniqueInOrder([1, 2, 2, 3, 3]);
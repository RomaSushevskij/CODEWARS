function comp(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    return array1.map(el => el ** 2).sort((a, b) => a - b).toString() === array2.sort((a, b) => a - b).toString();
}


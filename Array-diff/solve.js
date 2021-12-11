function arrayDiff(a, b) {
    if (a.length === 0 || b.length === 0) {
        return a
    } else {
        let resultArr = a;
        for (let i = 0; i < b.length; i += 1) {
           resultArr = resultArr.filter(num => num !== b[i])

        }
        return resultArr
    }
}


arrayDiff([1, 2, 3], [1, 2]);
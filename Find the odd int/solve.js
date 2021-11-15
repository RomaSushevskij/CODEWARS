function findOdd(A) {
    let names = {};
    A.forEach(item => {
        names[item] = (names[item] || 0) + 1;
    });
    for (let key in names) {
        if (names[key] % 2 !== 0)
            return +key
    }
}
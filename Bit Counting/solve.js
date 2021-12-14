var countBits = function (n) {
    return n.toString(2).split("").reduce((sum, item) => item === '1' ? sum + 1 : sum, 0)
};
const reverseSeq = n => {
    return Array.from({length: n}, (_, i) => i + 1).reverse()
};
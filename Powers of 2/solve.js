function powersOfTwo(n) {
    let answerArr = [];
    for (let i = 0; i <= n; i++) {
        answerArr.push(2 ** i)
    }
    return answerArr
}
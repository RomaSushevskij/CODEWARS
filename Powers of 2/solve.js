/*function powersOfTwo(n) {
    let answerArr = [];
    for (let i = 0; i <= n; i++) {
        answerArr.push(2 ** i)
    }
    return answerArr
}*/
const powersOfTwo = n => Array(n + 1).fill(2).map((e, i) => e**i );
function amIWilson(P) {
    let p = P - 1;
    let a = 1;
    if (p === 0) {
        return Number.isInteger((1 + 1) / (P * P))
    } else
        for (let i = 1; i <= p; i += 1) {
            a *= i
        }
    return Number.isInteger((a + 1) / (P * P))
}
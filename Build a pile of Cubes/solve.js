function findNb(m) {
    let n = 1;
    while (m > 0) {
        m -= n ** 3
        if (m > 0) {
            n++
        }
    }
    if (m === 0) {
        return n
    }
    return -1
}


findNb(4183059834009) // 2022)
findNb(24723578342962) // -1)
findNb(135440716410000) // 4824)
findNb(40539911473216) // 3568)

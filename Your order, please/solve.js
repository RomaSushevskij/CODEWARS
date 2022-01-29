function order(words) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const sortCallback = (word1, word2) => {
        const numOfLetter_1 = word1.split('').find(l => numbers.includes(Number(l)))
        const numOfLetter_2 = word2.split('').find(l => numbers.includes(Number(l)))
        return Number(numOfLetter_1) - Number(numOfLetter_2)
    }
    return words.split(' ').sort(sortCallback).join(' ')
}

order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")
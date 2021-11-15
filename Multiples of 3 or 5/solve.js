function solution(number) {
    if (number <= 3) {
        return 0
    } else if (number >= 4) {
        let arr = Array(number - 1).fill(1)
            .map((item, index) => item + index)
            .filter(item => item % 3 === 0 || item % 5 === 0)
            .reduce((sum, item) => item + sum, 0)
        return arr
    }
}
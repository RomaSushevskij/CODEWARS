function highAndLow(numbers) {
    let numArr = numbers.split(" ")
        .map(item => +item)
    return [Math.max(...numArr), Math.min(...numArr)]
        .join(" ")
}
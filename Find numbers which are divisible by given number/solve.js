function divisibleBy(numbers, divisor) {
    return numbers.filter(item => item % divisor == 0)
}
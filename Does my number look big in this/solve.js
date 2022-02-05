function narcissistic(value) {
    let valueArr = value.toString().split('').map(n => Number(n))
    let powerOfNum = valueArr.length
    let answerValue = valueArr.reduce((sum, num) => num**powerOfNum + sum, 0)
    return value === answerValue
}

/*narcissistic( 7 )*/
narcissistic( 371 )
narcissistic( 153 )
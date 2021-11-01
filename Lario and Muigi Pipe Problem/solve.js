const pipeFix = numbers =>
    Array.from(
        {length: numbers[numbers.length - 1] - numbers[0] + 1},
        (_, i) => numbers[0] + i
    )

function pipeFix(numbers){
    let firstEl = numbers[0];
    let lastEl = numbers[numbers.length - 1]
    let answer = [];
    for (let i = firstEl; i <= lastEl; i++ ) {
        answer.push(i)
    }
    return answer
}
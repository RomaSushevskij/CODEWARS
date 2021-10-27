/*function countPositivesSumNegatives(input) {
    let arr;
    if (input === null || input.length === 0) {
        return arr = [];
    } else {
        return arr = [input.reduce((count, el) => el > 0 ? count + 1 : count + 0, 0),
        input.reduce((sum, el) => el < 0 ? sum + el: sum + 0, 0)]
    }
}*/

function countPositivesSumNegatives(input) {
    return (input === null || input.length === 0) ? [] : [input.reduce((count, el) => el > 0 ? count + 1 : count + 0, 0),
        input.reduce((sum, el) => el < 0 ? sum + el: sum + 0, 0)]

}
countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPositivesSumNegatives([]);
countPositivesSumNegatives(null);
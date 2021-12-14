function findOutlier_1(integers) {
    let countEven = 0;
    let countOdd = 0;
    let ans;
    for (let i = 0; i < integers.length; i += 1) {
        if (integers[i] % 2 === 0) {
            countEven += 1;
            if (countEven >= 2) {
                break
            }
        } else if (integers[i] % 2 !== 0) {
            countOdd += 1;
            if (countOdd >= 2) {
                break
            }
        }
    }
    if (countEven >= 2) {
        for (let i = 0; i < integers.length; i += 1) {
            if (integers[i] % 2 !== 0) {
                ans = integers[i];
                break
            }
        }
    } else if (countOdd >= 2) {
        for (let i = 0; i < integers.length; i += 1) {
            if (integers[i] % 2 === 0) {
                ans = integers[i];
                break
            }
        }
    }
    return ans
}

function findOutlier(integers) {
    const evens = integers.filter(item => item % 2 === 0);
    const odds = integers.filter(item => item % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0]
}

findOutlier([0, 1, 2])
findOutlier([1, 2, 3])
findOutlier([2, 6, 8, 10, 3])
findOutlier([0, 0, 3, 0, 0])
findOutlier([1, 1, 0, 1, 1])
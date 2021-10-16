function firstNonConsecutive_1(arr) {

    for (let i = 0; i < arr.length - 1; i += 1) {
        if ((arr[i + 1] - arr[i]) === 1) {
            if ((i + 1) === (arr.length - 1)) {
                return null;
            }
        } else {
            return arr[i + 1];
        }
    }

}

function firstNonConsecutive_2(arr) {
    let result = arr.find((val, index) => val !== index + arr[0]);

    return (Number.isInteger(result)) ? result : null;
}


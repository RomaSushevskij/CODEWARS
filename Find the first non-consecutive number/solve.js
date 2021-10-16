function firstNonConsecutive(arr) {

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

firstNonConsecutive([1, 2, 5, 4, 5, 6, 7]);
function distinct(arr) {
    let result = [];
    for (let el of arr) {
        if (!result.includes(el)) {
            result.push(el);
        }
    }
    return result;
}
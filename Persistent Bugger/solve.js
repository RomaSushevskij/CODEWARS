function persistence(num) {
    let counter = 0;
    let newNum = num.toString();
    while (newNum.length > 1) {
        counter += 1;
        let numArr = [];
        for (let i = 0; i < newNum.length; i++) {
            numArr.push(+newNum[i])
        }
        newNum = numArr.reduce((mul, n) => n * mul, 1).toString();
    }
    return counter
}

persistence(39);
persistence(999);
persistence(4);
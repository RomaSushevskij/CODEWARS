bonus = function (arr, s) {

    let indent = 0;
    for (let i = 0; i < arr.length; i += 1) {
        let el = arr[0] / arr[i];
        indent += el;
    }
    let arrBonus = [];
    for (let j = 0; j<arr.length;j+=1) {
        let bonus = Math.round(arr[0] / arr[j] * s / indent);
        arrBonus.push(bonus);
    }
    return arrBonus;

}

bonus([22, 3, 15], 18228)

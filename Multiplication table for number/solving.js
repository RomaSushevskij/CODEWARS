function multiTable(number) {
    let range = 10;
    let multiplicationTable = '';
    for (let i = 1; i <= range; i += 1) {
        let el = (`${i} * ${number} = ${i * number}`);
        multiplicationTable = (i === 1) ? multiplicationTable += el :
            multiplicationTable += '\n' + el;
    }

    return multiplicationTable;
}

multiTable(5);

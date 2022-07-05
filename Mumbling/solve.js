function accum(str) {
    const resArr = [];
    str.split('').forEach((l,i) => {
        const el = l.repeat(i+1);
        const resEl = `${el.slice(0,1).toUpperCase()}${el.slice(1).toLowerCase()}`
        resArr.push(resEl)
    });
    return resArr.join('-')
}

accum("abcd");
accum("RqaEzty");
accum("cwAt");
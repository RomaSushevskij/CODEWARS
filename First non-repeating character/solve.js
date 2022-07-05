function firstNonRepeatingLetter(s) {
    const store = s.split('').reduce((acc, cur, i) => {
        const newCur = cur.toLowerCase();
        !acc[newCur] ? acc[newCur] = 1 : acc[newCur]++;
        return acc
    }, {});
    const resArr = Object.keys(store).filter(key => store[key] === 1);
    const result = resArr.length ? resArr[0] : ''
    const ind = s.split('').map(l => l.toLowerCase()).indexOf(result);
    return result === s[ind] ? result : result.toUpperCase();
}


// firstNonRepeatingLetter('a')   // 'a');
// firstNonRepeatingLetter('stress')   // 't');
// firstNonRepeatingLetter('sTress')   // 't');
// firstNonRepeatingLetter('moonmen')   // 'e');
firstNonRepeatingLetter('sTreSS')   // 'T');
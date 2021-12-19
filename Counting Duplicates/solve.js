function duplicateCount(text) {
    const textArr = text.toLowerCase().split('');
    const ansArr = [];
    for (let i = 0; i < textArr.length; i++) {
        const item = textArr.shift();
        if (textArr.includes(item)) {
            ansArr.push(item)
        }
    }
    const ans = new Set(ansArr);
    return ans.size
}


duplicateCount("");
duplicateCount("abcde");
duplicateCount("aabbcde");
duplicateCount("aabBcde");
duplicateCount("Indivisibility");
duplicateCount("Indivisibilities");
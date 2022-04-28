function anagrams(word, words) {
    const sortLetters = (l1, l2) => {
        if (l1 > l2) {
            return 1
        } else if (l1 < l2) {
            return -1
        } else {
            return 0
        }
    }
    const sortWord = (word)=> word.split('').sort(sortLetters).join('')
    const wordParamSort = sortWord(word)
    const wordsParamSort = words.map(word=>sortWord(word))

    let answerArr = []
    for (let i = 0; i < wordsParamSort.length; i++) {
        if (wordsParamSort[i] === wordParamSort) {
            answerArr.push(words[i])
        }
    }
    return answerArr
}

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) // ['aabb', 'bbaa']);
anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) // ['carer', 'racer']);
anagrams('laser', ['lazing', 'lazy', 'lacer']) // []);
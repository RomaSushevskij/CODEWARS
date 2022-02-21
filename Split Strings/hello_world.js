function solution(str) {
    if (str.length === 0) {
        return []
    }
    const resultArr = []
    const isEven = str.length % 2 === 0
    const strAsArr = str.split('')
    if (isEven) {
        for (let i = 0; i <= strAsArr.length - 2; i += 2) {
            const el = strAsArr.slice(i, i + 2).join('')
            resultArr.push(el)
        }
    } else {
        for (let i = 0; i <= strAsArr.length - 1; i += 2) {
            let el
            if (i === strAsArr.length - 1) {
                el = strAsArr.slice(i).join('') + '_'
            } else {
                el = strAsArr.slice(i, i + 2).join('')
            }

            resultArr.push(el)
        }
    }
    return resultArr
}

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
solution("abcdef") // should return  ["ab", "cd", "ef"]);
solution("abcdefg") // should return  ["ab", "cd", "ef", "g_"]
solution("")// should return  []
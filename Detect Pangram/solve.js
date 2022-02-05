function isPangram(string) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let stringArr = string.split('').map(l => l.toLowerCase())
    let filtredArrStr = stringArr.filter(l => arr_en.includes(l))
    let sortedArrStr = [...filtredArrStr].sort((l1, l2) => l1 > l2 ? 1 : l1 < l2 ? -1 : 0)
    return arr_en.every(l => sortedArrStr.includes(l))
}

isPangram("The quick brown fox jumps over the lazy dog.")
isPangram("This is not a pangram.")
isPangram("Cwm fjord bank glyphs vext quiz")
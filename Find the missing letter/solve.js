function findMissingLetter(array) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newArray = array.map(l => l.toLowerCase())
    let alphabetPart = [...alphabet.splice(alphabet.indexOf(newArray[0]),newArray.length)]
    let ansArr = alphabetPart.filter((l,i) => l !== newArray[i])
    console.log()
    return array[0].toUpperCase() !== array[0] ? ansArr[0] : ansArr[0].toUpperCase()
}

findMissingLetter(['a','b','c','d','f']) // 'e');
findMissingLetter(['O','Q','R','S']) // 'P');
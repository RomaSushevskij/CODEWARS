function pigIt(str) {
    const strToArr = str.split(' ')
    const arrMap = strToArr.map(w => {
        const checkingWord = w.replace(/[^\w\s]|_/g, "")
        if (w === checkingWord) {
            return w.slice(1) + w[0] + "ay"
        }
        return w

    })
    const result = arrMap.join(" ")
    return result
}

pigIt('Pig latin is cool') //'igPay atinlay siay oolcay
pigIt('This is my string') //'hisTay siay ymay tringsay
pigIt('This is my string !') //'hisTay siay ymay tringsay
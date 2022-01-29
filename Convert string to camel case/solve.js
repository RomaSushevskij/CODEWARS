function toCamelCase(str) {
    if (!str) {
        return ''
    }
    const arrStr = str.split( /[-_]/)
    for (let i = 1; i < arrStr.length; i++) {
        arrStr[i] = arrStr[i][0].toUpperCase() + arrStr[i].slice(1)
    }
    return arrStr.join('')
}

toCamelCase('')
toCamelCase("the_stealth_warrior")
toCamelCase("The-Stealth-Warrior")
toCamelCase("A-B-C")
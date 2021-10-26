function remove(s) {
    let sArr = s.split("")
    while (sArr[sArr.length - 1] === "!") {
        sArr = sArr.slice(0, sArr.length - 1)
    }
    return sArr.join("")


}
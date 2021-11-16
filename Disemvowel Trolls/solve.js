function disemvowel(str) {
    return str.split("").filter(item => item.toLowerCase() !== "a" &&
        item.toLowerCase() !== "e" && item.toLowerCase() !== "i" && item.toLowerCase() !== "o" &&
        item.toLowerCase() !== "u").join("")
}

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "")
}
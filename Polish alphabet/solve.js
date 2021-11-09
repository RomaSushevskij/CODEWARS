function correctPolishLetters(string) {

    let letters = {
        ą: "a",
        ć: "c",
        ę: "e",
        ł: "l",
        ń: "n",
        ó: "o",
        ś: "s",
        ź: "z",
        ż: "z"
    }

    return string.split("").map(item => letters.hasOwnProperty(item) ? letters[item] : item).join("")
}
String.prototype.toAlternatingCase = function () {
    return this.split("").map(s => (s === s.toUpperCase()) ? s.toLowerCase() : s.toUpperCase()).join("")
}
function removeExclamationMarks(s) {
    return s.split("").map(current => (current != "!") ? current : "").join("");
}
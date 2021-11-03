function stringy(size) {
    return Array(size).fill(1).map((item, index) => index == 0 || index % 2 == 0 ? item : 0).join("")
}
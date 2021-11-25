function digital_root(n) {
    while (n > 9) {
        n = n.toString().split('').reduce((sum, item) => +item + sum, 0)
    }
    return n
}
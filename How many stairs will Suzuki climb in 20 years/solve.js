function stairsIn20(s) {
    return s.reduce((sum, item) => item.reduce((sum, item) => item + sum, 0) + sum, 0) * 20
}
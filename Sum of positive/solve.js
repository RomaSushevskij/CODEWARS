function positiveSum(arr) {
    return arr.filter(el => el>=0).reduce((init, current)=> init+current, 0)

}
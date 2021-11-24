function elevator(left, right, call) {
    let diffLeft = Math.abs(call - left)
    let diffRight = Math.abs(call - right)
    console.log(diffLeft, diffRight)
    return diffLeft < diffRight ? 'left' : diffLeft > diffRight ? 'right' : 'right'
}
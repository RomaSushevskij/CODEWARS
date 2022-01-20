function isValidWalk(walk) {
    if (walk.length !== 10) {
        return false
    }
    const sumS = walk.reduce((sum, n) => n === 's' ? 1 + sum : 0 + sum, 0);
    const sumN = walk.reduce((sum, n) => n === 'n' ? 1 + sum : 0 + sum, 0);
    const sumW = walk.reduce((sum, n) => n === 'w' ? 1 + sum : 0 + sum, 0);
    const sumE = walk.reduce((sum, n) => n === 'e' ? 1 + sum : 0 + sum, 0);
    if ((sumS - sumN) === 0 && (sumW - sumE) === 0) {
        return true
    }
    return false
}

isValidWalk(['n','s','n','s','n','s','n','s','n','s']);
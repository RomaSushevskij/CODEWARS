const rps = (p1, p2) => {
    const getMsg = (n) => `Player ${n} won!`;
    if (p1 === p2) {
        return 'Draw!'
    }
    if (p1 === 'rock') {
        if (p2 === 'scissors') {
            return getMsg(1)
        } else {
            return getMsg(2)
        }
    }
    if (p1 === 'scissors') {
        if (p2 === 'paper') {
            return getMsg(1)
        } else {
            return getMsg(2)
        }
    }
    if (p1 === 'paper') {
        if (p2 === 'rock') {
            return getMsg(1)
        } else {
            return getMsg(2)
        }
    }
}
function points(games) {
    let result = 0;
    for (let i = 0; i < games.length; i += 1) {
        let count = games[i][0] > games[i][2] ?
            3 : games[i][0] < games[i][2] ? 0 : 1
        result += count
    }
    return result
}
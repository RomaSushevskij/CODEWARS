function rot13(message) {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let wordIndexes = [];
    message.toLowerCase().split('').forEach(l => {
        arr_en.includes(l) ?
            wordIndexes = [...wordIndexes, arr_en.indexOf(l)] :
            wordIndexes = [...wordIndexes, l]
    });
    return wordIndexes.map(i => {
        if (typeof i === 'number') {
            return i < arr_en.length - 13 ? i + 13 : i + 13 - arr_en.length
        } else {
            return i
        }
    })
        .map(ni=> {
            return typeof ni === 'number' ? arr_en[ni] : ni
        })
    .map((l,i) => {
        return message.split('')[i] === message.split('')[i].toLowerCase() ? l : l.toUpperCase()
    }).join('');
}

rot13('grfg') //test
rot13('Pbqrjnef') //Codewars
rot13('10+2 is twelve') //10+2 vf gjryir
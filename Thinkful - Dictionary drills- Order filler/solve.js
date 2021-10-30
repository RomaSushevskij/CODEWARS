fillable = (stock, merch, n) => {
    if (stock.hasOwnProperty(merch)) {
        if (stock[merch] >= n) {
            return true
        } else {
            return false
        }
    }
    return false
}

let stock = {
    'football': 4,
    'boardgame': 10,
    'leggos': 1,
    'doll': 5
};

fillable(stock, 'football', 3);
fillable(stock, 'leggos', 2);
fillable(stock, 'action figure', 1);



function defineSuit(card) {
    const cards = {
        "♣": "clubs",
        "♠": "spades",
        "♦": "diamonds",
        "♥": "hearts"
    }
    return cards[card[card.length - 1]]
}
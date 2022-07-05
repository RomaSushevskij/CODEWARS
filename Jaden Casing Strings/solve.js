String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => `${word.slice(0,1).toUpperCase()}${word.slice(1)}`).join(' ')
};
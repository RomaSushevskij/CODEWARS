var cubeChecker = function (volume, side) {
    if (volume > 0 && side > 0) {
        if (side ** 3 === volume) {
            return true
        }
    }
    return false
};
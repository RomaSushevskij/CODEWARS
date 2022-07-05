function helper(f, n) {
    return f ? f(n) : n
}

function zero(f) {
    return helper(f, 0)
}
function one(f) {
    return helper(f, 1)
}
function two(f) {
    return helper(f, 2)
}
function three(f) {
    return helper(f, 3)
}
function four(f) {
    return helper(f, 4)
}
function five(f) {
    return helper(f, 5)
}
function six(f) {
    return helper(f, 6)
}
function seven(f) {
    return helper(f, 7)
}
function eight(f) {
    return helper(f, 8)
}
function nine(f) {
    return helper(f, 9)
}


function plus(lValue) {
    return function(rValue) {
        return rValue + lValue
    }
}
function minus(lValue) {
    return function (rValue) {
        return rValue - lValue
    }
}
function times(lValue) {
    return function (rValue) {
        return rValue * lValue
    }
}
function dividedBy(lValue) {
    return function (rValue) {
        return Math.floor(rValue / lValue)
    }
}


seven(times(five()))   //35
four(plus(nine()))  //13;
eight(minus(three()))  //5
six(dividedBy(two()))  //3
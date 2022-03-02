function isPrime(num) {
    if (num <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0 ) {
            return false
        }
    }
    return true
}

isPrime(0) //  false,
isPrime(1) //  false,
isPrime(2) //  true,
isPrime(73) // true,
isPrime(75) // false,
isPrime(-1) // false,
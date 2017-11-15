const primeNumbers = [
    2, 3, 5, 7
]

module.exports.generate = (aNumber) => {
    let primeFactors = []

    primeNumbers.forEach((primeNumber) => {
        aNumber = getPrimeFactors(aNumber, primeNumber)
    })

    return primeFactors

    function getPrimeFactors(aNumber, primeNumber) {
        if (aNumber % primeNumber === 0) {
            primeFactors.push(primeNumber)
            return getPrimeFactors(aNumber / primeNumber, primeNumber)
        }

        return aNumber
    }
}
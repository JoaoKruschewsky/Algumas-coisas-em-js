function fibonacci(numTerms) {
    var sequence = [0, 1];
    for (var i = 2; i < numTerms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
}
console.log(fibonacci(14))
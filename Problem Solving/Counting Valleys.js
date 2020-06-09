function countingValleys(n, s) {
    let valley = 0;
    let counter = 0;
    for (let step of s) {
        counter = step === 'U' ? counter - 1 : counter + 1;
        if (counter === 0) {
            if (step === 'U') {
                valley++;
            }
        }
    }
    return valley;
}
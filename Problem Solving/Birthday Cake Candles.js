function birthdayCakeCandles(ar) {
    let maxNum = Math.max(...ar);
    let filtered = ar.filter(function(value, index, arr) {
        return value === maxNum;
    });
    return filtered.length;
}
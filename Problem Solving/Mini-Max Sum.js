function miniMaxSum(arr) {
    let _arr = arr.sort((a, b) => a - b)
    let minVals = _arr.slice(0, 4)
    let maxVals = _arr.slice(1)
    const arrSum = __arr => __arr.reduce((a, b) => a + b, 0)
    let minSum = arrSum(minVals)
    let maxSum = arrSum(maxVals)
    console.log(minSum, maxSum)
}
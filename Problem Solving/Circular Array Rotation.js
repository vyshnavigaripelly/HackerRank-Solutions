function circularArrayRotation(a, k, queries) {
    for (let i = 0; i < queries.length; i++) {
        let index = (queries[i] + len - (k % len)) % len;
        result.push(a[index])
    }

    return result;
}
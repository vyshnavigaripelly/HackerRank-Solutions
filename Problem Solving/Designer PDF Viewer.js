function designerPdfViewer(h, word) {
    const a = {}; 
    let i = 'a'.charCodeAt(0);
    let j = 'z'.charCodeAt(0);
    for (; i <= j; i++) a[String.fromCharCode(i)] = h[i - 97];
    const max = word.split('').reduce((acc, cur) => a[cur] > acc ? a[cur] : acc, 0)
    return max * word.length;
}
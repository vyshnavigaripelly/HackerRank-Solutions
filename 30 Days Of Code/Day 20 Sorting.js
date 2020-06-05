function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
        let len = a.length -1
    let count = 0

    for(let i = 0; i <= len; i++) {
        for(let j = 0; j < len; j++) {
            if(a[j] > a[j + 1]) {
                let t = a[j]
                a[j] = a[j+1]
                a[j+1] = t
                count++
            }
        }
    }

    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[len]}`)

}
function main() {
    let t = parseInt(readLine());
    for(let a0 = 0; a0 < t; a0++){
        let n_temp = readLine().split(' ');
        let n = parseInt(n_temp[0]);
        let k = parseInt(n_temp[1]);
        let p = 0
        for(let i = 1; i <= n; i++) {
            for(let q = i+1; q <= n; q++) {
                let s = i&q
                if(s < k) {
                    if(s > p) p = s
                }
            }
        }
        console.log(p)
    }
}
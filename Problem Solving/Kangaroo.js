function kangaroo(x1, v1, x2, v2) {
    let t = (x1 - x2) / (v2 - v1);
    if(t>0 && t % 1 ===0){
        return 'YES'
    }
    return 'NO'
}
function viralAdvertising(n) {
    let day = 1;
    let view = 5;
    let like = 2;
    let totalLike = 2;

    for (let i = 2; i <= n; i++) {
        view = like * 3;
        like = Math.floor(view / 2);
        totalLike += like;
    }

    return totalLike;

}
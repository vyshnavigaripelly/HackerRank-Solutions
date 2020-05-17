function kaprekarNumbers(p, q) {
    let answers = [];
    for (let i = p; i <= q; i++) {
        const square = (i * i).toString();
        let r = square.substring(square.length - i.toString().length);
        let l = square.substring(0, square.length - i.toString().length);
        if (parseInt(r) + parseInt(l || 0) === i) {
            answers.push(i);
        }
    }

    console.log(answers.length ? answers.join(' ') : 'INVALID RANGE');
}
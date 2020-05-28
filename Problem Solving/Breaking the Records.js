function breakingRecords(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    let highCount = 0;
    let lowCount = 0;
    for(let i=1; i<scores.length; i++){
        if(scores[i]>highest){
            highest = scores[i];
            highCount++;
        } else if(scores[i] < lowest){
            lowest = scores[i];
            lowCount++;
        }
    }
    return [highCount, lowCount]
}
function matrixRotation(matrix, r) {
    let length = matrix[0].length;
    let width =  matrix.length;
    let numRings = length > width ? width / 2 : length / 2;
    let rings = [numRings];
    let newRings = [numRings];
    let newMatrix = [];
    for (let x = 0; x < width; x++) {
        newMatrix[x] = [];
    }
    
    for (let x = 0; x < numRings; x++) {
        let ringSize = length * 2 + width * 2 - 4;
        rings[x] = [ringSize];
        let down = x;
        let right = x;
        rings[x][0] = matrix[down][right];
        for (let y = 1; y < ringSize; y++) {
            if (y < length) { right++;
            } else if (y < length + width - 1) { down++;
            } else if (y < 2 * length + width - 2) { right--;
            } else { down--; }
            rings[x][y] = matrix[down][right];
        } 
        newRings[x] = [ringSize];
        for (let y = 0; y < ringSize; y++) {
            let index = (y + r) % ringSize;
            if (index < 0) { index += ringSize; }
            newRings[x][y] = rings[x][index];
        } 
        down = x;
        right = x;
        newMatrix[down][right] = newRings[x][0];
        for (let y = 1; y < ringSize; y++) {
            if (y < length) { right++;
            } else if (y < length + width - 1) { down++;
            } else if (y < 2 * length + width - 2) { right--;
            } else { down--; }
            newMatrix[down][right] = newRings[x][y];
        }
        length -= 2;
        width -= 2;
    }
    for (let x = 0; x < matrix.length; x++) {
        let line = '';
        for (let y = 0; y < matrix[0].length; y++) {
            line += newMatrix[x][y] + ' ';
        }
        console.log(line);
    } 
}
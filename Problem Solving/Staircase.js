function staircase(n) {
    for (let desc = n, asc = 1; 0 < desc; desc--, asc++) {
        console.log(" ".repeat(desc - 1) + "#".repeat(asc));
    }
}
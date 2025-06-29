function makeLeftSpacePyramid(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        
        row += ' '.repeat(n - i); // This line of code is only for taking right space
        for (let j = 1; j <= i; j++) {
            row = row + j
        }
        console.log(row)
    }


}
makeLeftSpacePyramid(5)
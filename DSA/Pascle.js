function PascleTrigle(n) {
    let triangle = []
    for (let i = 0; i < n; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            }
            else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j])
            }
        }
        triangle.push(row)
    }
    const result = triangle.forEach((row, i) => {
        console.log(' '.repeat(triangle.length - i - 1) + row.join(' '))
    });
    return result

}
PascleTrigle(5)
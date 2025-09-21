function bitCounting(n) {
    let array = []
    for (let i = 0; i <= n; i++) {
        const binary = i.toString(2);
        let count = 0;
        for (let char of binary) {
            if (char === '1') {
                count++;
            }
        }
        array.push(count);
    }
    return array
}
const result = bitCounting(1)
console.log(result)

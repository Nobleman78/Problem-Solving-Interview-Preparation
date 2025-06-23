function FirstNonRepeatingChar(str, n = 2) {
    const count = {}
    for (let char of str) {
        count[char] = (count[char] || 0) + 1
    }
    let nonrepeatChar = []
    for (let char in count) {
        if (count[char] === 1) {
            nonrepeatChar.push(char)
        }
    }
    return nonrepeatChar.length >= n ? nonrepeatChar[n - 1] : null
}
console.log(FirstNonRepeatingChar('Hello', 2))

function staircase(n) {
    for (let i = 1; i <= n; i++) {
        let line = ''
        for (let k = 1; k <= i; k++) {
            line = +'#'
        }
        console.log(line)

    }
}


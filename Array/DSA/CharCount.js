function CharCount(str) {
    let result = []
    let count = 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++
        }
        else {
            if (count > 1) {
                result.push(`${str[i]} = ${count} times`)
            }
            count = 1

        }
    }
    return result
}
console.log(CharCount('HHHHHello'))
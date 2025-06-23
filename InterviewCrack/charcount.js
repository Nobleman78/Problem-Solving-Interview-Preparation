function CharCount(str) {
    const count = {}
    for (let char of str) {
        if (char === ' ') {
            continue
        }
        count[char] = (count[char] || 0) + 1
    }
    let maxChar = ''
    let maxCount = 0;
    for (let char in count) {
        if (count[char] > maxCount) {
            maxCount = count[char]
            maxChar = char

        }
    }
    return { mostFrequentChar: maxChar, Counts: maxCount }
}
console.log(CharCount('Hello World'))
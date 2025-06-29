function findLongestWord(str) {
    const words = str.match(/[a-zA-Z]+/g) || []
    const result = []
    let maxLength = 0
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length
            result.length = 0
            result.push(word)
        }
        else if (word.length === maxLength) {
            result.push(word)
        }
    }
    return result

}
console.log(findLongestWord('I am the king of this area'))
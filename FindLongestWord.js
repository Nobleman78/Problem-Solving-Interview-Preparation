function longestWord(str) {
    const words = str.split(/\s+/)
    return words.reduce((longest, word) => longest.length > word.length ? longest : word)

}
console.log(longestWord('i know you are the bestifytheman'))
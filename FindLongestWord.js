function FindLongestWord(str1) {
    const words = str1.match(/[a-zA-Z]+/g) || [];
    let maxLength = 0;
    const result = []
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            result.length = 0;
            result.push(word);
        }
        else if (word.length === maxLength){
            result.push(word)
        }

    }
    return result

}
console.log(FindLongestWord('I am the king of this area'))
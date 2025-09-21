function bracketCheck(str) {
    let stack = []
    const bracketMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    };
    for (let char of str) {
        if (bracketMap[char]) {
            stack.push(char)
        }
        else {
            const endBrackets = stack.pop()
            if (bracketCheck[endBrackets] !== char) {
                return false
            }
        }
    }
}
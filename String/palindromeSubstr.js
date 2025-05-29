function palindromeSubstr(s) {
    if (s.length < 2) {
        return s;
    }
    let len = 0;
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        expandFromCenter(i, i)
        expandFromCenter(i, i + 1)

    }
    function expandFromCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        const len = right - left - 1
        if (len > maxLength) {
            maxLength = len
            start = left + 1
        }

    }
    return s.substring(start, start + maxLength)

}
const result = palindromeSubstr('abacdxyxpq')
console.log(result)
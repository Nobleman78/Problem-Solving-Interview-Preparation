function findSubstring(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    const n = s.length;

    if (k > n) return "Not found!";

    let maxCount = 0;
    let currentCount = 0;
    let maxSubstring = "";


    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) currentCount++;
    }

    if (currentCount > 0) {
        maxCount = currentCount;
        maxSubstring = s.slice(0, k);
    }

    
    for (let i = 1; i <= n - k; i++) {
        if (vowels.has(s[i - 1])) currentCount--;
        if (vowels.has(s[i + k - 1])) currentCount++;

        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxSubstring = s.slice(i, i + k);
        }
    }

    return maxCount > 0 ? maxSubstring : "Not found!";
}
console.log(findSubstring('azerdii',5))
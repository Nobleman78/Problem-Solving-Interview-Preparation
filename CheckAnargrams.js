function CheckAnarGrams(str1, str2) {
    const str1LowerCase = str1.toLowerCase();
    const str2LowerCase = str2.toLowerCase();
    if (str1LowerCase.length !== str2LowerCase.length) {
        return false;
    }
    return str1LowerCase.split('').sort().join('') === str2LowerCase.split('').sort().join('')


}
console.log(CheckAnarGrams('ListeN', 'SiLenT'))
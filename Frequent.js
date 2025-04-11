function FreQuentChar(str){
    const trackChar = {};
    for(const char of str){
        trackChar[char] = (trackChar[char] || 0) + 1;
    }
    let maxStr = 0;
    let frequentChar = '';
    for(const char in trackChar){
        if(trackChar[char]>maxStr){
            maxStr = trackChar[char];
            frequentChar = char;
        }
    }
    return {char: frequentChar, count: maxStr}
    


}
console.log(FreQuentChar('Heeeeelloworld'));

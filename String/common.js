function prefixStr(str){
    let prefix = str[0];
    for(let i = 1; i<str.length; i++){
        while(str[i].indexOf(prefix) !== 0){
           prefix =  prefix.slice(0,-1)
        }
        if(prefix === ''){
            return ''
        }
    }
    return prefix

}
console.log(prefixStr(['Hello','Hel', 'He']))

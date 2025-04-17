function missingNumber(arr) {
    const MaxNumber = Math.max(...arr);
    const MinNumber = Math.min(...arr)
    const missingNumbers = [];

    for(let i = MinNumber ; i<= MaxNumber; i++){
        if(!arr.includes(i)){
            missingNumbers.push(i);
        }
    }
    return missingNumbers

}
console.log(missingNumber([1, 2, 3, 4, 5, 10, 12]))
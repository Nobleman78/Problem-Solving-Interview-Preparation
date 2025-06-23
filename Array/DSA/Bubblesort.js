function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        console.log('i',i)
        for (let j = 0; j < arr.length - 1 - i; j++) {
            console.log('j' ,j)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr

}
const arr = [2, 1, 4, 6, 3, 5]
console.log(bubbleSort(arr))
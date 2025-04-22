function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }

        }
    }
}
const unsortedArray = [40, 20, 30, 60, 50, 80, 10]
bubbleSort(unsortedArray)
console.log(unsortedArray)
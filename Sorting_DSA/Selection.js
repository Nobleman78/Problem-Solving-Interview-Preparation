function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp

        }

    }
}
const unsortedArray = [5, 3, 6, 8, 1, 2, 7, 4];
selectionSort(unsortedArray)
console.log(unsortedArray)
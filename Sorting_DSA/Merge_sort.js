function mergeSort(arr) {

    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2)
    const leftArry = arr.slice(0, mid)
    const rightArray = arr.slice(mid);


    //Recursive function calling
    const leftMerged = mergeSort(leftArry)
    const rightMerged = mergeSort(rightArray)
    return merge(leftMerged, rightMerged)


}
function merge(left, right) {
    const arr = []
    let i = 0; let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr.push(left[i])
            i++;
        }
        else {
            arr.push(right[j])
            j++;
        }
    }
    return arr.concat(left.slice(i)).concat(right.slice(j))

}

const unsortedArray = [8, 6, 2, 1, 3, 4, 7, 5];
const sorted = mergeSort(unsortedArray)
console.log(sorted)
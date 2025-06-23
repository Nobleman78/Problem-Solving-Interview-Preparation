function MergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = arr.length / 2;
    const left = MergeSort(arr.slice(0, mid))
    const right = MergeSort(arr.slice(mid))
    return merge(left, right)
}
function merge(left, right) {
    const array = []
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            array.push(left[i])
            i++
        }
        else {
            array.push(right[j])
            j++
        }

    }
    return array.concat(left.slice(i)).concat(right.slice(j));
}
const arr = [4, 2, 1, 5, 7, 6, 8, 3]
console.log(MergeSort(arr))
export default function mean(array) {
    let mean
    let result = array.reduce((sum, acc) => sum + acc, 0)
    return mean = result / array.length

}
const array = [5, 5, 8, 2]
console.log(findMean(array))
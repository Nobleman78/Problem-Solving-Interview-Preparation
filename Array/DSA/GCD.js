// function GCD(a, b) {
//     if (b === 0) {
//         return a
//     }
//     return GCD(b, a % b)
// }
// console.log(GCD(12,16))
function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b]
    }
    return a
}
function findGCDofArray(arr) {
    return arr.reduce((a, b) => gcd(a, b));
}
console.log(findGCDofArray([12, 24, 36]))
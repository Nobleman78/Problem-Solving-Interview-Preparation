/* Backtracking Example */

function SubsetMaking(arr) {
    let result = []
    function Backtrack(start, path) {
        result.push([...path])
        for (let i = start; i < arr.length; i++) {
            path.push(arr[i])
            Backtrack(i + 1, path)
            path.pop()
        }


    }
    Backtrack(0, [])
    return result


}
console.log(SubsetMaking([1, 2, 3]))
function removeItem(nums, value) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === value) {
            nums.splice(i, 1)
        }
        else {
            i++
        }
    }
    return nums

}
const nums = [10, 30, 25, 40, 20, 35, 5, 30]
const result = removeItem(nums, 30)
console.log(result)
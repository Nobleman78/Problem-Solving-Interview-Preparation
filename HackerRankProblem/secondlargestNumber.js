function getSecondLargest(nums) {
    // Convert all elements to numbers

    let firstLargestNumber = nums[0];
    let secondLargest = -Infinity;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > firstLargestNumber) {
            secondLargest = firstLargestNumber;
            firstLargestNumber = nums[i];
        } else if (nums[i] > secondLargest && nums[i] < firstLargestNumber) {
           
            secondLargest = nums[i];
        }
    }

    return secondLargest;
}
console.log(getSecondLargest(['2','3','4','6','6','5']));

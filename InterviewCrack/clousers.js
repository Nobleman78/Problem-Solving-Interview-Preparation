function Count() {
    let count = 0;
    return function increaseCount() {
        count = count + 1
        return count;
    }

}
let result = Count()

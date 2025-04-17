function GroupArrayOfObjectByKey(array, key) {
    return array.reduce((acc, currentItem) => {
        console.log(acc)
        const groupKey = currentItem[key];
        if (!acc[groupKey]) {
            acc[groupKey] = [];
        }

        acc[groupKey].push(currentItem);
        return acc;
    }); 
}
const people = [
    { name: 'Alice', age: 21, city: 'New York' },
    { name: 'Bob', age: 25, city: 'Chicago' },
    { name: 'Charlie', age: 21, city: 'New York' },
    { name: 'David', age: 25, city: 'Los Angeles' }
];
console.log(GroupArrayOfObjectByKey(people, 'age'))
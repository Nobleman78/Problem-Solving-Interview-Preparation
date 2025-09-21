function ArrayTraversal(array, position, element, operation) {
    if (operation === 'insert') {
        for (let i = array.length; i > position; i--) {
            array[i] = array[i - 1];
        }
        array[position] = element;
    } 
    else if (operation === 'delete') {
        for (let i = position; i < array.length - 1; i++) {
            array[i] = array[i + 1]; // shift left
        }
        array.length--; // remove last duplicate
    }
    return array;
}

const array = [1, 2, 3, 4, 5, 6, 7];

// Insert at index 2
// console.log(ArrayTraversal(array, 2, 99, 'insert')); 
// Delete at index 4
console.log(ArrayTraversal(array, 4, null, 'delete'));


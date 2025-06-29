// // let arr1 = [ 100,200,300,400]
// // let arr2 = [ 100,200,300,400]
// // console.log(JSON.stringify(arr1) === JSON.stringify(arr2))

// let value ;
// console.log(value)
// let valuetwo = null
// console.log(valuetwo)

// let x = 123;
// let text= x.toString(2)
// console.log(text)
// Convert the array into string
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString())


// find the last index value of an array

// const fruits = ['banana','orange','apple','mango']
// const midIndex = Math.floor(fruits.length/2)
// console.log(fruits[midIndex])
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(3);
// console.log(citrus)
// const numbers = [4, 9, 16, 25, 29];
// let first = numbers.findIndex(myFunction)
// console.log(first)
// function myFunction(value, index, arr) {
//     return value > 18

// }
// const temp = [27, 28, 30, 40, 42, 35, 30];
// let firstLargest = -Infinity
// let secondLargest = - Infinity

// for (let i = 0; i < temp.length; i++) {
//     if (temp[i] > firstLargest) {
//         secondLargest = firstLargest
//         firstLargest = temp[i]
//     }
//     else if (temp[i] > secondLargest && temp[i] !== firstLargest) {
//         secondLargest = temp[i]
//     }

// }

// console.log("First Largest:", firstLargest);      
// console.log("Second Largest:", secondLargest);
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.sort())

// const x = 10;
// console.log(x)
// console.log(y)
// var y = 20;
const arr = [1,2,3,[4,5,6,[7,8,9]]]
console.log(arr.flat(2))
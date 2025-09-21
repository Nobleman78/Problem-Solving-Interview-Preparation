/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  let currentValue = initialValue;
  let isFirstCall = true; // Flag to track the first invocation

  return function(updateFunction) {
    if (typeof updateFunction === 'function') {
      currentValue = updateFunction(currentValue);
      isFirstCall = false; 
      return currentValue;
    } else {
    
      if (isFirstCall) {
        isFirstCall = false; 
        return currentValue; 
      } else {
       
        currentValue++;
        return currentValue;
      }
    }
  };
}
const counter = makeCounter();


console.log(counter()); 

console.log(counter()); 
// Expected output: 1

// Third invocation (no updateFunction)
console.log(counter()); // isFirstCall is false. currentValue increments to 2. Returns 2.
// Expected output: 2

// Example with an update function
console.log(counter((prev) => prev * 2)); // currentValue is 2. (2 * 2) = 4. Returns 4. currentValue is 4.
// Expected output: 4

// Another invocation after an update function
console.log(counter()); // isFirstCall is false. currentValue increments to 5. Returns 5.
// Expected output: 5


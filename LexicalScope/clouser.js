function counter() {
  let count = 0;
  return () => count++;
}
const increment = counter();
console.log(increment()); 
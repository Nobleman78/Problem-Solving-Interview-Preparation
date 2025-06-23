let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/gi);
const result = Array.from(iterator);
console.log(result.map(res=>res[0]))
class Stack {
    constructor() {
        this.Stack = [];
    }
    push(value) {
        return this.Stack.push(value);
    }
    pop(value) {
        if (this.isEmpty())
            return null;
        return this.Stack.pop(value)
    }
    peek() {
        if (this.isEmpty())
            return null;
        return this.Stack[this.Stack.length - 1]
    }
    isEmpty() {
        return this.Stack.length === 0;
    }
    toArray(){
       return[...this.Stack].reverse()
    }
}
//Constructor calling
const newStack = new Stack();
newStack.push(10)
newStack.push(20)
newStack.push(30)
newStack.push(40)

console.log(newStack.toArray())
function fibonacchi(number) {
    let fib = [0, 1]
    for (let i = 2; i < number; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib.reduce((acc,sum)=>acc+sum,0)


}
console.log(fibonacchi(5))



function UseRest(arg) {
    const [ first,second,...rest] = arg
    console.log(rest)
}
UseRest([1, 2, 3, 4, 5])
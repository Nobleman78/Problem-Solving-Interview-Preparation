const findClearDays = (input) => {
    const [x, y] = input.split(' ').map(Number)
    console.log(7 - (x + y))

}
findClearDays('2 3')
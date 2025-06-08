function findClearDays(rainy, cloudy) {
    const days_of_week = 7;
    let result = 0 ;
    if (rainy < 7 && cloudy < 7) {
        if ((rainy + cloudy) <= 7) {
            result = days_of_week - (rainy + cloudy)
        }

    }
    return result;


}
console.log(findClearDays(4, 4))
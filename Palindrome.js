let number = 1212;
if(number<0 || number%10 == 0 && number!=0){
    console.log('Not Palindrome');

}
let repeatedNumber = 0;
while(number>repeatedNumber){
    repeatedNumber = repeatedNumber *10 + number%10;
    number = number/10;
}
if(number == repeatedNumber){
    console.log('Palindrome')
}
else if(number == repeatedNumber/10){
    console.log('Palindrome ')
}
else{
    console.log('Not palindrome')
}
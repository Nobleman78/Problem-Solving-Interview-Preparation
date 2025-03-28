// In this code i want to insert an specific number in the array
//  in an specific position

let array = [10,20,30,50,60];
// I want to insert this number in the array.
const number = 40;
const position = 3;
for(let i = array.length-1; i>=0; i--){
    console.log(array[i]);
    if(i>=position){
        array[i+1] = array[i];
        if(i==position){
            array[i] = 40;
        }
    }
   

}
console.log(array)

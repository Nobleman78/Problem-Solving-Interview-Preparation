const array = [2,7,0,11,15,9];
const n = array.length;
const target = 9;
for(let i = 0; i< n-1; i++){
    for(let j = i+1 ; j<n; j++){
        if(array[i] + array[j] == target){
            console.log('index = ',i,j,'Number = ', array[i],array[j])
            
        }
    }
}

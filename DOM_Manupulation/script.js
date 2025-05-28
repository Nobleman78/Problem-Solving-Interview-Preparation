let counter = 0;
const input = document.getElementById('counterValue')
input.value = counter;
function increaseValue(){
    const input = document.getElementById('counterValue')
    counter++;
    input.value = counter;
    
}

function decreseValue(){
    const input = document.getElementById('counterValue')
    counter--;
    input.value = counter;
}
function resetValue(){
    const input = document.getElementById('counterValue')
    counter = 0;
    input.value = counter;
}
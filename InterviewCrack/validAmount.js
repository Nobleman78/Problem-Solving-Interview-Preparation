function ValidAmount(amount) {
    let finalAmount = amount ?? 'Invalid';
    console.log(`Amount is: ${finalAmount}`);
}

ValidAmount(50);
ValidAmount(0);
ValidAmount();         // ?? Means nullish coalescing operator
ValidAmount(null);



// const product = {
//     name:'pen',
//     price:20,
//     location:'Dhaka'
// }


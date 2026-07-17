// todo:        topic: Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.


const cart = 1100;
const member = false;

if( cart > 1000 && member === true){
     let discount = cart / 100 *20;
     let discountLaterBill =cart - discount;
     console.log('20% discount with , your bill :', discountLaterBill, 'taka');
}
else if( cart > 1000){
    discount = cart / 100 * 10;
     discountLaterBill =cart - discount;
    console.log('10 % discount with payment:', discountLaterBill,'taka');
}
else{
    console.log('no discount, you will payment', cart ,'taka');
}
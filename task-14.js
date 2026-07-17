// todo:   topic: Using age and hasID, use nested if-else to check whether someone is eligible to vote.

const age = 27;
const hasId = true;

if( age>= 18){
    if(hasId=== true){
        console.log('Eligible to Vote');
    }
}else{
    console.log('not eligible to vote');
}
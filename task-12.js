// todo:       topic:  Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

const bmi =29.9;

if(bmi < 18.5 && bmi >= 1){
    console.log('UnderWeight');
}
else if(bmi >= 18.5  && bmi <24.9){
    console.log('Normal');
}
else if (bmi >= 25  && bmi <=29.9) {
    console.log('OverWeight');
}
else if( bmi >= 30 ){
    console.log('Obese');
}
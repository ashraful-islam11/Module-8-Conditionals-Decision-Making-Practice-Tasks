// todo:   topic: Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches. 


const marks = 99;

if(marks >= 80 && marks <= 100){
    console.log('A+');
}
else if( marks >=70 && marks <=79){
    console.log('A');
}
else if(marks >= 60 && marks <= 69){
    console.log('B');
}
else if(marks >= 50 && marks <= 59){
    console.log('C');
}
else{
    console.log('F');
}
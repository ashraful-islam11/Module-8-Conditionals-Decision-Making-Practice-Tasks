// todo:        topic: Build a simple login + role-check system that verifies username/password and shows a different message based on admin/user role — combine everything from this module (comparison, logical operators, if-else, ternary).


const username ='ashraful';
const password = 111;
const isAdmin =true;
const isUser =true;


if( username === 'ashraful' && password === 111){
    if(isAdmin === true){
        console.log('Admin Dashboard');
    }
    else if(isUser === true){
        console.log('User Dashboard');
    }
}
else{
    console.log('please log in');
}



// ternary operator:

const system = (username === 'ashraful' && password === 111) ? (isAdmin === true ? 'Admin Dashboard welcome' : isUser === true ? 'user dashboard welcome' : '') : ' logIn please';

console.log(system);

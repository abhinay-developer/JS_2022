console.log("Let Keyword In Js");


var firstName="raja";
let lastName="kiran";

console.log(`First Name:${firstName}`);//raja
console.log(`LastName :${lastName}`);//kiran


function display(){
    let age=10;
    var desg="Java Dev";
    console.log(`Age: ${age}`);//10
    console.log(`Desg: ${desg}`);//Java Dev

    console.log(`First Name:${firstName}`);//raja
    console.log(`LastName :${lastName}`);//kiran
}
// console.log(`Age: ${age}`);//10
// console.log(`Desg: ${desg}`);//Java Dev


display();
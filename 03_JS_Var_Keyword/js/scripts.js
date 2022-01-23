console.log("Var keyword")

console.log(fisrtNum);//undefined
var fisrtNum=10;


console.log(fisrtNum);//10


function display(){
    console.log(fisrtNum);//10
}

function display1(){
    console.log(fisrtNum);//10
}

display();
display1();
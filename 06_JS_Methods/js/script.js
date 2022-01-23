console.log("JS Methods");

// function  display(){
//     console.log("Display Method");
// }

let display=()=>console.log("display Method");//No Paramters

display();

// function displayName(myName){
//     console.log(`My Name: ${myName}`);
// }

let displayName=myName=>console.log(`My Name:${myName}`); //ES6
displayName("raja");


// function  addition(firstNum=0,secoundNum=0){
//     let result=firstNum+secoundNum;
//     console.log(`Result:${result}`);
// }

let addition=(firstNum,secoundNum)=>{
 let result=firstNum+secoundNum;
    console.log(`Result:${result}`);
}

addition(20,30);


// function  employee(emp){
//     console.log(emp);
// }

let employee=emp=>console.log(emp);

employee({id:1,name:"raja"})
//Global Keyword var
//string,number,boolean,array,object,null,undefined
/** 
var firstName="raja";//string
var lastName="kiran";
var mobileNumber=7788778877;//number
var isQualified=false;//boolean
var salary=12000.00;//number
var address=["Karimnagar,Hyderbad"];//array or object
We need to use typeof() operator to print the datatype of specific varaible
*/

var firstName="raja",lastName="kiran",mobileNumber=7788778877,isQualified=false,salary=12000.00,address=["Karimnagar,Hyderbad"];

console.log(`\nFirst Name:${firstName} \nLast Name:${lastName} \n Mobile Number: ${mobileNumber} \n Is Qualified: ${isQualified} \n Salary: ${salary}`)
// console.log("First Name:"+firstName);
// console.log(`First Name:${firstName}`) //ES6 
// console.log(`First Name:${typeof(firstName)}`) 
// console.log(`Last Name:${lastName}`) 
// console.log(`Last Name:${typeof(lastName)}`)
// console.log(`Mobile Number :${mobileNumber}`) 
// console.log(`Mobile Number :${typeof(mobileNumber)}`) 
// console.log(`is Qualified :${isQualified}`) 
// console.log(`is Qualified :${typeof(isQualified)}`) 
// console.log(`Salary :${salary}`) 
// console.log(`Salary :${typeof(salary)}`) 
// console.log(`address :${address}`) 
// console.log(`address :${typeof(address)}`)
var colors=["RED","GREEN","YELLOW"];//length starts from 1,index starts from 0
var student=[{
    id:1,
    name:"raja",
    age:23,
    dept:"IT",
    desg:"Angular Dev"
}]

console.log(student);//

// for(var i=0;i<student.length;i++){
//     console.log(student[i]);
// }

// for(var stu of student){
//     console.log(stu);
// }

// for(var stu in student){
//     console.log(student[0])
// }



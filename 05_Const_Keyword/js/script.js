let log=console.log;

log("Const Keyword");

const a=10;//Assignment to constant variable.block  scope level Scope
 

// const is keyword in JS Once we declare we cannot modify and it block level scope
// a=20;
log(`The Value of a :${a}`);


function display(){
    const firstName="raja";
     log(`Name ${firstName}`);
}
log(`Name ${firstName}`);


//What is diff   var,let ,const
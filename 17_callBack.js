console.log(`Callback function using function expression`);
function assignment(callbackFun){
    console.log(`Start: Assignmen Solving`);
    console.log(`Took 3 hours`);
    console.log(`Complete: Assignmen Solving`);
}
function copyAssignment(){
    console.log(`Start Copying`);
    console.log(`Took 15 min to copy`);
    console.log(`Complete assignment`);
}
assignment(copyAssignment);

console.log(`Callback using function expression`);
 let doHomeWork = function(callbackFun){
    console.log(`Start: Assignmen Solving`);
    console.log(`Took 3 hours`);
    console.log(`Complete: Assignmen Solving`);
}
 let copyHomeWork = function(){
    console.log(`Start Copying`);
    console.log(`Took 15 min to copy`);
    console.log(`Complete assignment`);
}
doHomeWork(copyHomeWork);
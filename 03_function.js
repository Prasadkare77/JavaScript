//function with no argument and no return value
function addition() {
    var a = 10;
    var b = 20;
    sum = a + b;
    console.log("Addition is: ",sum);
}
addition();

//function with argument and no return value
var a = 100;
var b = 200;
name1 = "Prasad";
name2 = "Kare";
function swapVariables(valueOne, valueTwo){ //Arguments
    console.log("Before Swap Value one: ",valueOne, "value Two: ",valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log("After Swap Value one: ",valueOne, "value Two: ",valueTwo);
}
swapVariables(a,b);
swapVariables(name1,name2);

//function with argument and return value
function newAddition(num1,num2){
    var result = num1 + num2;
    return result;
}
var newResult = newAddition(100,200);
console.log("Addition is: ",newResult);
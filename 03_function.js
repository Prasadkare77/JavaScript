
function addition() {
    var a = 10;
    var b = 20;
    sum = a + b;
    console.log("Addition is: ",sum);
}
addition();

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
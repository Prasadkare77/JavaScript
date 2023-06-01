

console.log(myName);
var myName;
myName = "PK";

console.log(city);
let city = "Pune"

console.log(country);
const country = "India"

show()   //Normal function or named function are hoisted that's why we are able to call or invoke it even before it's declaration
function show(){
    console.log("show function");
}

display(); // FE never hoisted
var display = function() {
    console.log("inside FE");
}


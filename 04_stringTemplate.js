var greet = "Good Morning";
var resultSpilt = greet.split(" ");
console.log(resultSpilt);
console.log(`After split word are: ${resultSpilt} Total number of words: ${resultSpilt.length}`);
console.log(`Given string is: ${greet}`);


var myName = "Elon Musk";
var result = myName.startsWith("E");
console.log(` Is ${myName} starts with character E: ${result}`);

var result = myName.startsWith("Elon");
console.log(` Is ${myName} starts with character "Elon" : ${result}`);

var result = myName.startsWith("elon");
console.log(` Is ${myName} starts with character "elon" : ${result}`);


var myName = "Elon Musk";
var result = myName.endsWith("k");
console.log(` Is ${myName} ends with character "k" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("Musk");
console.log(` Is ${myName} ends with character "Musk" : ${result}`);

var myName = "Elon Musk";
var result = myName.endsWith("b");
console.log(` Is ${myName} ends with character "b" : ${result}`);
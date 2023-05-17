
var num1;
var num1 = num1++;
console.log(`${num1}`);


var num1;
var num1 = num1 + 8;
console.log(`${num1}`);

var fullName = "Hello"; 
var myNumber = +fullName;
console.log(myNumber)

console.log(``);
console.log(`Explicit conversion: Invalid string to number return NaN`);
var result;
result = Number('Hello');
console.log(result);
result = Number(undefined);
console.log(result);

console.log(``);
console.log(`Check out few interesting fact and log result on console with reason:`);
var result;
result = 0=='';
console.log(result);
result = 0=='0';
console.log(result);
result = 0==false;
console.log(result);
result = null==undefined;
console.log(result);
result = 1==[1];
console.log(result);
result = 1==true;
console.log(result);
result = 1=='1';
console.log(result);
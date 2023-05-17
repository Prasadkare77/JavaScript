console.log(`String Conversion`);
var num = 100;
var string = String(num);
console.log(`Number to String Conversion of ${string} and type is ${typeof string}`);

var isTrue = true;
var string = String(isTrue);
console.log(`Boolean to String Conversion of ${string} and type is ${typeof string}`);

console.log(``);

console.log(`Explicit conversion: Convert number strings and boolean values to numbers,
In that case we can use Number(); `);
var string = "100";
var num = Number(string);
console.log(`String to Number Conversion of ${num} and type is ${typeof num}`);

var string = "Prasad";
var num = Number(string);
console.log(`String to Number Conversion of ${num} and type is ${typeof num}`);

var isTrue = true;
var num = Number(isTrue);
console.log(`Boolean to Number Conversion of ${num} and type is ${typeof num}`);

var isFalse = false;
var num = Number(isTrue);
console.log(`Boolean to Number Conversion of ${num} and type is ${typeof num}`);

console.log(``);

console.log(`Boolean Conversion`);
var num = 100;
var isTrue = Boolean(num);
console.log(`Number to Boolean Conversion of ${isTrue} and type is ${typeof isTrue}`);

console.log(`Boolean Conversion`);
var num = -88;
var isTrue = Boolean(num);
console.log(`Number to Boolean Conversion of ${isTrue} and type is ${typeof isTrue}`);

console.log(`Boolean Conversion`);
var num = 0;
var isTrue = Boolean(num);
console.log(`Number to Boolean Conversion of ${isTrue} and type is ${typeof isTrue}`);

console.log(`Boolean Conversion`);
var string = "100";
var isTrue = Boolean(string);
console.log(`String to Boolean Conversion of ${isTrue} and type is ${typeof isTrue}`);

console.log(``);
console.log(`Implicit conversion to String`);
var result;
result = '3' + 2;
console.log(result);
result = '3' + true;
console.log(result);
result = '3' + undefined;
console.log(result);
result = '3' + null;
console.log(result);

console.log(``);
console.log(`Implicit boolean conversion to Number`);
var result;
result = '4' - 2;
console.log(result);
result = '4' - true;
console.log(result);
result = 4 + true;
console.log(result);
result = 4 + false;
console.log(result);

console.log(``);
console.log(`Implicit string conversion to Number`);
var result;
result = '4' - '2';
console.log(result);
result = '4' - 2;
console.log(result);
result = '4' * 2;
console.log(result);
result = '4' / 2;
console.log(result);

console.log(``);
console.log(`Undefined used with number, boolean or null given NaN`);
var result;
result = 4 + undefined;
console.log(result);
result = 4 - undefined;
console.log(result);
result = true + undefined;
console.log(result);
result = null + undefined;
console.log(result);

console.log(``);

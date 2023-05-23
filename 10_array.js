
let array = [34,23,65,29,78,22];
console.log(`Array is: ${array}`);
console.log(`Type of array is: ${ typeof array}`);
let lengthOfArray = array.length;
console.log(`Length of array is: ${lengthOfArray}`);

//Accessing array element
let indexof65 = array[2];
console.log(`Inndex of 65 is: ${indexof65}`);

//Accessing last element
let arrayLength = array.length;
let lastElement = array[arrayLength-1];
console.log(`Last element in array: ${lastElement}`);

//Accessing Second last element
let secondlastElement = array[arrayLength-2];
console.log(`Second Last element in array: ${secondlastElement}`);

//Adding element in the last position
array.push(80);
console.log(`Array is: ${array}`);

//Adding element at first position
array.unshift(50);
console.log(`Array is: ${array}`);

// Removing last element from array
array.pop();
console.log(`Array is: ${array}`);

// Removing first element from array
array.shift();
console.log(`Array is: ${array}`);

//Update array element
array[0] = 888;
console.log(`Array is: ${array}`);

//Update the last value
array[array.length-1] = 999;
console.log(`Array is: ${array}`);

//Update the third last value
array[array.length-3] = 77;
console.log(`Array is: ${array}`);

let str = "My ambitions are very big";
let subString = str.substring(3)
console.log(`${subString}`);

//sliced array
console.log(`Slice()`);
const sliedArray = array.slice(2,5);
console.log(`Array is: ${sliedArray}`);

//spliced array
console.log(`Splice()`);
array = [34,23,65,29,78,22];
const splicedArray = array.splice(3);
console.log(`Array is: ${splicedArray}`);

console.log(`Splice()`);
array = [34,23,65,29,78,22,55,88,53];
const spliced = array.splice(2,5);
console.log(`Array is: ${spliced}`);

//splice for insertion
console.log(`splice for insertion`);
array = [34,23,65,29,78,22,55,88,53];
array.splice(2, 0, 666,444);
console.log(`Array is: ${array}`);

//splice for insertion by replacing element
console.log(`splice for insertion by replacing element`);
array = [34,23,65,29,78];
array.splice(1, 1, 99,88,77,66);
console.log(`Array is: ${array}`);

//splice for insertion by replacing element
console.log(`splice for insertion by replacing element`);
array = [34,23,65,29,78];
array.splice(2, 2, 111,222,333);
console.log(`Array is: ${array}`);
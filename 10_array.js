let array = [34, 23, 65, 29, 78, 22];
console.log(`Array is: ${array}`);
console.log(`Type of array is: ${typeof array}`);
let lengthOfArray = array.length;
console.log(`Length of array is: ${lengthOfArray}`);

//Accessing array element
let indexof65 = array[2];
console.log(`Inndex of 65 is: ${indexof65}`);

//Accessing last element
let arrayLength = array.length;
let lastElement = array[arrayLength - 1];
console.log(`Last element in array: ${lastElement}`);

//Accessing Second last element
let secondlastElement = array[arrayLength - 2];
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
array[array.length - 1] = 999;
console.log(`Array is: ${array}`);

//Update the third last value
array[array.length - 3] = 77;
console.log(`Array is: ${array}`);

let str = "My ambitions are very big";
let subString = str.substring(3);
console.log(`${subString}`);

//sliced array
console.log(`Slice()`);
const sliedArray = array.slice(2, 5);
console.log(`Array is: ${sliedArray}`);

//spliced array
console.log(`Splice()`);
array = [34, 23, 65, 29, 78, 22];
const splicedArray = array.splice(3);
console.log(`Array is: ${splicedArray}`);

console.log(`Splice()`);
array = [34, 23, 65, 29, 78, 22, 55, 88, 53];
const spliced = array.splice(2, 5);
console.log(`Array is: ${spliced}`);

//splice for insertion
console.log(`splice for insertion`);
array = [34, 23, 65, 29, 78, 22, 55, 88, 53];
array.splice(2, 0, 666, 444);
console.log(`Array is: ${array}`);

//splice for insertion by replacing element
console.log(`splice for insertion by replacing element`);
array = [34, 23, 65, 29, 78];
array.splice(1, 1, 99, 88, 77, 66);
console.log(`Array is: ${array}`);

//splice for insertion by replacing element
console.log(`splice for insertion by replacing element`);
array = [34, 23, 65, 29, 78];
array.splice(2, 2, 111, 222, 333);
console.log(`Array is: ${array}`);

//Traversing array
for (let i = 0; i < array.length; i++) {
  var element = array[i];
  console.log(element);
}
console.log(``);

for (let i = 0; i < array.length; i++) {
  var element = array[i];
  // if(element.startsWith(6)){
  //   console.log(element);
  // }
  if (element.length == 5) {
    console.log(element);
  }
}
console.log(``);

//For in loop
console.log(`For in loop`);
for (const element in array) {
  console.log(array[element]);
}

console.log(`For of loop`);
for (const element of array) {
  console.log(element);
}

//Even index element
console.log(`Even index element`);
for (const index in array) {
  if (index % 2 == 0) {
    console.log(`${array[index]}`);
  }
}

//Join
console.log(`Join`);
let numbers = array.join(", ");
console.log(numbers);

const arrayBoys = ["Anil", "Ram", "Sunil"];
let arrayGirls = ["Siya", "Jenny"];

let combineArray = arrayBoys + arrayGirls;
console.log(combineArray);

let concatArray = arrayBoys.concat(arrayGirls);
console.log(concatArray);

console.log(`------ Resize an array -------`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
arrayNames.length = 3;
console.table(arrayNames);

console.log(`Spread Operator ...`);
var arrayNames = ["Anil", "Siya", "Ram" ,"Sunil", "Jenny"];
console.log(arrayNames);
console.log(...arrayNames);

const newArray = [...arrayNames];
console.log(newArray);
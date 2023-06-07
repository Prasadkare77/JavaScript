
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given Array: ${arrayNumbers}`);

console.log(``);
console.log(`1. Add 10 into each element and log new array result on console`);
const newArray = [];
arrayNumbers.forEach((elememt) => {
    let add = elememt + 10;
    newArray.push(add);
})
console.log(`New array: ${newArray}`);

console.log(``);
console.log(`2. Sqaure the each array element and log on console`);
const squareArray = [];
arrayNumbers.forEach((elememt) => {
    let square = elememt * elememt;
    squareArray.push(square)
})
console.log(`Square of Element: ${squareArray}`);

console.log(``);
console.log(`3. Add the index value into its corresponding each array element and log new array result on console`);
const indArray = [];
arrayNumbers.forEach((elememt, index) => {
    let sum = elememt + index;
    indArray.push(sum);
})
console.log(`Added index into element:${indArray}`);



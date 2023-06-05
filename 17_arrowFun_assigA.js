
console.log(`1. With no arg and no return value, log messege on console inside arrow function`);

let display = () => {
    console.log(`"Good Mornig, Today is Monday`);
}
display();

console.log(``);
console.log(`2. With 3 arg and no return value, for recived 3  parameters perform the multiplication`);
let multiplication = (num1 ,num2, num3=1) => {
    let result = num1 * num2 * num3;
    console.log(`Multiplication of ${num1}, ${num2}, ${num3} is: ${result}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(``);
console.log(`3. With 5 arg and return value such as, for received params it should do the addition.`);
let addition = (a,b,c,d,e) => {
    let sum = a+b+c+d+e+ " ";
    return console.log(`Addition is : ${sum}`);
}
addition(100,100,200,349,756);
addition("I am"," learnig"," ES6"," features"," in depth");
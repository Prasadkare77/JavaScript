
for( let index = 0; index < 10; index++){
    console.log(index);
}
console.log(``);

for( let index = 0; index <= 10; index++){
    console.log(index);
}
console.log(``);

for( let index = 0; index <= 10; index=index+2){
    console.log(index);
}
console.log(``);

for (let i=5; i<=50; i=i+5){
    console.log(i);
}

console.log(``);

//Reverse String Using For Loop
var str = "JavaScript";
var newStr = "";
for(let i=str.length-1; i>=0; i--){
    var char = str.charAt(i); // get character
    newStr = newStr.concat(char); // string concatanation
}
console.log(newStr);

console.log(``);

//Reverse String using function
function reverseString (word) {
    console.log(`String is: ${word}`);
    var newString = "";
    for(let i=word.length-1; i>=0; i--){
        var char = word.charAt(i); // get character
        newString = newString.concat(char); // string concatanation
    }
    console.log(`Reverse String is: ${newString}`);
}
reverseString("JavaScript");
reverseString("Hello World");
reverseString("Google Chrome");

console.log(``);

// String Palindrome
function isPalindrome (string){
    console.log(`String is: ${string}`);
    var newStr = "";
    for (let i=string.length;i>=0;i--){
        var char = string.charAt(i);
        newStr = newStr.concat(char);
    }
    console.log(`Reverse String is: ${newStr}`);
    if (string == newStr) {
        console.log(`String is palindrome`);
    } else {
        console.log(`String is not palindrome`);
    }

}
isPalindrome("nitin");

console.log(``);

// Owels Count a e i o u
var string = "JavaScript Language of Internet";
var Count =0;
for(let i=0; i<string.length; i++){
    var char = string.charAt(i);
    if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' ||char=='A' || char=='E' || char=='I' || char=='O' || char=='U'){
        console.log(`Owels is: ${char}`);
        Count++;
    }

}
console.log(`Count of Owels is: ${Count}`);
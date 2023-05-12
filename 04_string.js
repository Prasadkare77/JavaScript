
var greet = "Good Morning";
var greetResult = greet.length;
console.log("Total number of character in given string is:",greetResult);

var charAtZeroIndex = greet.charAt(0);
console.log("Char atzero index:",charAtZeroIndex); 

var charAtLastIndex = greet.charAt(greet.length-1);
console.log("Char atzero index:",charAtLastIndex); 

for(var i=0; i<greet.length;i++){
    console.log(greet.charAt(greet.length-1)); 
}

var replaceRes = greet.replace("Morning","Afternoon");
console.log("After Replacement: ", replaceRes);

var indexOfM = greet.indexOf("M");
console.log("Index of M: ", indexOfM);

//String Concat
var firstName = "   Prasad   ";
var lastName = "Kare";

var concatString = firstName.concat(lastName);
console.log("String concat is:",concatString);

var nameLength = firstName.length;
console.log("Total number of character in given string is:",nameLength);

var trimmedFirstName = firstName.trim();
console.log("After trim first character is: ", trimmedFirstName,trimmedFirstName.length);
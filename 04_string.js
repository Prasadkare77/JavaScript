
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

var greet = "Good Morning";
var includeResult = greet.includes("ing");
console.log("Is ing string available inside : ", includeResult);

var searchResult = greet.search("Mor");
console.log("Search result : ", searchResult);

var sliceResult = greet.slice(4, 6);
console.log("Slice Result is: ", sliceResult);

var subStringResult = greet.substring(4, 6);
console.log("Substring result is: ", subStringResult);

var greet = "Good Morning mate, how are you";
var resultSplit = greet.split(" ");
console.log(resultSplit);
console.log("Total no of words:",resultSplit.length);

var greet = "Good Morning mate, how are you";
var resultSplit = greet.split(",");
console.log(resultSplit);
console.log("Total no of words:",resultSplit.length);

var greet = "Good Morning mate, how are you";
var resultSplit = greet.split("");
console.log(resultSplit);
console.log("Total no of words:",resultSplit.length);

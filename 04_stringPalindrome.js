
function isPalindrome(str){
    console.log(`String is: ${str}`);
    let newStr = "";
    let char;
    for(let i = str.length; i>=0; i--){
        char = str.charAt(i);
        newStr = newStr + char;
    }
    if(str == newStr){
        console.log(`String ${str} is palindrome.`);
    }
    else{
        console.log(`String ${str} is not palindrome.`);
    }
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");
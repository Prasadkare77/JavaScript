
`use strict`;

function hello(greetCallback, sayCallback){
    console.log(`Hello`);
    greetCallback(100);
    sayCallback("See you tommarow");
}

let greet = function(num){
    console.log("Good Mornig", num);
}

let sayBye = function(message){
    console.log(`Good Bye, ${message}`);
}

hello(greet,sayBye);
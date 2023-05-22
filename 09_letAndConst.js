

var myName = "Prasad"; // variable declaration and Initialization

var myName = "Kare"; // variable Re-declaration

myName = "Prasad B. Kare"; // Update

console.log(`${myName}`);

let collegeName = "Sinhgad College";

collegeName = "Sinhgad Institute"; // Re-declaration not allowed

const pi = 3.14;

console.log(`${pi}`); 

// Scope == Accessibility
let age = 25;
if (age == 25) {
    let city = "Pune";
    console.log(`City: ${city}`);
}
console.log(`City: ${city}`);

function show(){
    var country = "India";
    
}
console.log(`Country: ${country}`);
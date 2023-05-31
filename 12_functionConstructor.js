

function Students(name,age,gender,city) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.city = city;
    showDetails = function(){
        console.log(`Details is: ${name}, ${age}, ${gender}, ${city}`);
    }
}
Students.prototype.country = "India";

const abhijeet = new Students("Abhijeeet", 21, "Male", "Pune");
const poonam = new Students("Poonam", 20, "Female", "Mumbai" );
const rushi = new Students("Rushikesh", 23, "Male", "Indor");
const snehal = new Students("Snehal", 22, "Male", "Pune");

console.log(abhijeet.country);
console.log(poonam.country);
console.log(rushi);
console.log(snehal);

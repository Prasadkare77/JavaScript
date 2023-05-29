
let person = {
    height: "6feet",
    name: "Bill Gates",
    city: "Pune",
    age: 54,
    isMarried: true,
    address: {
        street: "Wakad Road",
        landmark: "Near Datta Mandir",
        city: "Pune",
        pin: 413109,
        state: "MH",
        country: "India",
    },
    walk: function(totalWalk){
        console.log(`${this.name} Yes I can Walk.`);
    },
    details: function(){
        console.log(`Personal Deatails Name: ${this.name}, City: ${this.city}`);
    },
    getDetails: function(){
        let details = `Name: ${this.name}, Age: ${this.age}, Is Married: ${this.isMarried}, City: ${this.city}`
        return details;
    }
};

console.log(`Accessing object properties`);
//Dot Notation
const personName = person.name;
console.log(`Name is: ${personName}`);
console.log(`City is: ${person.city}`);
console.log(`Height is: ${person['height']}`);

console.log(``);
console.log(`Update object properties`);
person.city = "Mumbai";
console.log(`City is: ${person.city}`);
person.isMarried = false;
console.log(`Married: ${person.isMarried}`);

console.log(``);
console.log(`Add object properties`);
person.gender = "Male";
person.state = "MH";

console.log(``);
console.log(`Delete object properties`);
delete person.height;

console.log(``);
console.log(`Invoke or call function`);
person.walk("5KM");
// console.log(person.walk());

console.log(``);
person.details();

console.log(``);
const details = person.getDetails();
console.log(`Details about person is: ${details}`);

console.log(``);
console.log(`Accessing Nested Object Properties`);
const personCountry = person.address.country;
console.log(personCountry);

console.log(``);
console.log(`Update Nested Object Properties`);
person.address.pin = 454353;
console.log(person.address);

console.log(``);
console.log(`Type of Person is: ${typeof person}`);
console.log(person);
console.table(person);

console.log(``);
console.log(`Creating Empty Object`);
let student = {
    name: "Prasad",
    show: function(){
        this.name;
    }
}
student.marks = 98;

const isCityAvailable = "city" in student;
console.log(`City is available in student: ${isCityAvailable}`);
const isMarks = "marks" in student;
console.log(`Marks is available in student: ${isMarks}`);
console.log(student);
console.table(student);
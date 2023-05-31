
class Students {
    constructor (name,age,gender,city){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    showDetails() {
        console.log(`Details are: ${this.name}, ${this.age}, ${this.gender}, ${this.city}`);
    }
}
const prasad = new Students("Prasad",25,"Male","Pune");
const billGates = new Students("Bill",33,"Male","USA");
const steve = new Students("Steve",25,"Male","UK");
const abhijeet = new Students("Abhijeeet", 21, "Male", "Pune");
const poonam = new Students("Poonam", 20, "Female", "Mumbai" );
const rushi = new Students("Rushikesh", 23, "Male", "Indor");
const snehal = new Students("Snehal", 22, "Male", "Pune");
// prasad.showDetails();
// billGates.showDetails();
// steve.showDetails();

const array = [prasad,billGates,steve];
for (const iterator of array) {
    iterator.showDetails();
}

const result = prasad instanceof Students;
console.log(result);

class college {

}

const res = prasad instanceof college;
console.log(res);
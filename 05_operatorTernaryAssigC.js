console.log(`                                       1`);
console.log(`1. Write normal function 'maleMarriageEligibility()' with 3 args gende, age and boyName.`);
console.log(`   function should msg as per the step 1.2 according to condition check.`);
console.log(``);

function maleMarriageEligibility(gender, age, boyName) {
    console.log(`Gender: ${gender}, Age: ${age}, Name: ${boyName}`);
    var result = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for Marriage.` : `Hey ${boyName} you are not eligible for Marriage.`;
    return console.log(`${result}`);
}
maleMarriageEligibility("Male", 25, "Bill Gates");
console.log(``);
maleMarriageEligibility("Male", 17, "Stev Jobs");

console.log(``);
console.log(`                                       2`);
console.log(`2. Write normal function 'femaleMarriageEligibility()' with 3 args gende, age and girlName.`);
console.log(`   function should msg as per the step 2.2 according to condition check.`);
console.log(``);

function femaleMarriageEligibility(gender, age, girlName) {
    console.log(`Gender: ${gender}, Age: ${age}, Name: ${girlName}`);
    var result = gender == "Female" && age >= 18 ? `Hey ${girlName} you are eligible for Marriage.` : `Hey ${girlName} you are not eligible for Marriage.`;
    return console.log(`${result}`);
}
femaleMarriageEligibility("Female", 16, "Jenifer");
console.log(``);
femaleMarriageEligibility("Female", 27, "Malinda Gates");


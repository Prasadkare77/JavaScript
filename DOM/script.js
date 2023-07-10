const elementPersonal = document.getElementById("personal");
console.log(elementPersonal.innerHTML);

const elementNameByClass = document.getElementsByClassName("name");
console.log(elementNameByClass[0].innerHTML);

const elementH3 = document.querySelectorAll("p")
console.log(elementH3[0].innerHTML);


// querySelectorAll
// querySelector

const elementPer = document.querySelector('#personal');
console.log(elementPer.innerHTML);

const elementName = document.querySelector(".name");
console.log(elementName.innerHTML);

const elementH3Contact = document.querySelector("h3");
console.log(elementH3Contact.innerHTML);

console.log("======== .querySelectorAll('p') ");

const elementsPara = document.querySelectorAll('p');
for (const element of elementsPara) {
    console.log(element.innerHTML);
}

console.log(`======== document.querySelectorAll(".ceo")`);
const elementsCeo = document.querySelectorAll(".ceo")
elementsCeo.forEach( (element)=>{
    console.log(element.innerHTML);
} );


console.log(`Update element an city`);
const elementCity = documnet.querySelector("#city");
elementCity.innerHTML = "City : Mumbai";

console.log(` Changing an element attribute`);
const elementLink = document.querySelector('.link');
elementLink.setAttribute('href', 'https://www.linkedin.com/login');
// // https://www.linkedin.com/login

console.log(`Change css style`);
const addrElement = document.querySelector('#address');
addrElement.computedStyleMap.color = 'red';

console.log(`Removinng an element`);
const elementHobbies = document.querySelector('.hobbies');
const elementSwimm = document.querySelector('#swimm');
elementHobbies.removeChild(elementSwimm);

const contactElement = document.querySelector('#contact');
contactElement.addEventListener('click', ()=>{
    
});
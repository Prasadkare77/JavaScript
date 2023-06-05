
const array = [10,5,70,90,100,30];
array.forEach( (currentValue, index, array) => {
    console.log(`${currentValue}, ${index}`);
    
});
console.log(`${array}`);

console.log(`Executing forEach() with only required arguments`);
array.forEach( (currentValue) => {
    if (currentValue >= 50) {
        console.log(`${currentValue}`);
    }
    
})
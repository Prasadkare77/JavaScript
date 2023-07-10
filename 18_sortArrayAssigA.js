

const array = [10, 5, 'a', 'b', 'h', 11];
const arrayNum = [];
const charNum = [];

array.filter((element) => {
    if(typeof element === 'number'){
        arrayNum.push(element);
    }
    else{
        charNum.push(element);
    }
});

console.log(`Array is: ${array}`);

arrayNum.sort((n1,n2)=>{
    return n1 > n2 ? 1 : -1; 
});
console.log(`Sorted Number: ${arrayNum}`);

charNum.sort((n1,n2)=>{
    return n1 > n2 ? 1 : -1; 
});
console.log(`Sorted Alphabets: ${charNum}`);



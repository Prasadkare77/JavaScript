console.log(`1. Write a program from 5 to 15 by increamenting 1.`);
let i = 5;
var resultI = "";
while (i<=15) {
    resultI += i + " ";
    i++;
}
console.log(`${resultI}`);
console.log(``);

console.log(`2. Write a program to print numbers from 50 to 40 by decreamenting by 1`);
let j = 50;
let resultJ = "";
while (j>=40) {
    resultJ += j + " ";
    j--;
}
console.log(resultJ);
console.log(``);

console.log(`3. Write a program find first 15 odd numbers.`);
let k = 0;
let resultK = "";
let oddCount = 0;
while(oddCount<15){
    if(k%2 != 0){
        resultK += k + " ";
        oddCount++;
    }
    k++;
}
console.log(resultK);
console.log(``);

console.log(`4. Write a program to find first 10 even numbers.`);
let l = 0;
let resultL = "";
let evenCount = 0;
while(evenCount<10){
    if(l%2 == 0){
        resultL += + l + " ";
        //console.log(l);
        evenCount++;
    }
    l++;
}
console.log(resultL);
console.log(``);

console.log(`5.Write a program to print table of 5 like -> 5 10 15 ... 50.`);
let m = 5;
let resultM = "";
while(m<=50){
    resultM += m + " ";
    m = m + 5;    
}
console.log(resultM);
console.log(``);

console.log(`6. Write a program to print table of 10 like 10 20 30  ... 100.`);
let n = 10;
let resultN = "";
while(n<=100){
    resultN += n + " ";
    n = n + 10;    
}
console.log(resultN);
console.log(``);

console.log(`7.Write a program to print table of 10 in reverse order like -> 100 90 80 ... 10`);
let o = 100;
let resultO = "";
while(o >= 10){
    resultO += o + " ";
    o = o -10;
}
console.log(resultO);
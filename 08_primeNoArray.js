
function primeNo(...arrayNum){
    let isPrime = true;
    console.log(`Array is: ${arrayNum}`);
    const arrayPrime = [];
    for(let i=2; i<arrayNum.length; i++){
        if(arrayNum[i]%2 == 0){
            isPrime=false;
            break;
        }
    }
    if(isPrime){
        arrayPrime.push(arrayNum)
        console.log(`Prime number array : ${arrayPrime}`);
    }
    
}
primeNo(2,19,123,34,56,78,100);


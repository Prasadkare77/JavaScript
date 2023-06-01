
function primeNumber (num){
    let isPrime = true;
    for(let i=2; i<num; i++){
        if(num%i == 0){
            isPrime = false;
            console.log(`${num} is not a prime no it is divisible by ${i}`);
            break;
        }
    }
    if(isPrime){
        console.log(`${num} is prime number`);
    }
    else{
        console.log(`${num} is not a prime number`);
    }
}
primeNumber(10);
primeNumber(7);
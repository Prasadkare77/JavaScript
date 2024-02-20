function isPrimeNo(num){
    if (num === 0) {
        return false
    }

    for(let i=2; i=num/2; i++){
        if (num % i === 0) {
            return false
        }
    }
    console.log(`Prime No is ${num}`)
}
isPrimeNo(5)
isPrimeNo(3)

function isPrimeNumber(num){
    if (num === 0) {
        return false
    }

    for(let i=2; i<num/2; i++){
        if(num % i === 0){
            return false
        }
    }
    console.log(`${num} is Prime Number`)
}
isPrimeNumber(7)
isPrimeNumber(10)
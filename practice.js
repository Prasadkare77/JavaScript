function fibbonacci(num){
    let num1= 0
    let num2 = 1
    let sum =0;
    let fibb = ''
    let first = num1
    let second = num2
    for(let i=0; i<num; i++){
        sum = num1 + num2
        num1 = num2
        num2 = sum
        fibb = fibb + sum + ' '
    }
    console.log(first, second,fibb)
}
fibbonacci(10)
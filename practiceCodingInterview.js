// Q1 . Write a function that returns the reverse of string?

function reverseString(str){
    let reverse = '';
    for(let i=str.length-1; i>=0; i--){
        reverse = reverse + str[i]
    }
    console.log(`Revesrs String is: ${reverse}`)
}
reverseString('Prasad Kare')

let str = 'Prasad Kare'
let reverseStr = str.split('').reverse().join('')
console.log(`Revesrs String is: ${reverseStr}`)


// Q2. Write a function that returns the longest word in the sentence

function longestWord(sentence){
    const words = sentence.split(' ')
    let longest = ''
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    console.log(`Longest Word: ${longest}`)
}
longestWord('I love coding in javascript')
longestWord('I love coding in React')

// Q3. Write a function that checks whether a given string is a palindrome or not?

function palindrome(string){
    console.log(`String is: ${string}`)
    let char = ''
    let word = ''
    for(let i=string.length-1; i>=0; i--){
        char = string.charAt(i)
        word = word + char
    }
    console.log(`New String is: ${word}`)
    if(word === string){
        console.log(`String is Plaindrome`)
    } else {
        console.log(`String is not palindrome`)
    }
}
palindrome('Prasad')
palindrome('racecar')

let string = 'nitin'
let newStr = string.split('').reverse().join('')
console.log(`New String is: ${newStr}`)
if (string === newStr) {
    console.log(`String is Plaindrome`)
} else {
    console.log(`String is not palindrome`)
}

// Q4. Write a function to remove duplicate elements from an array

let array1 = [1,3,5,7,9]
let array2 = [1,2,3,4,5,6,7,8,9]

let allArrElements = [...array1, ...array2]
console.log(`New Array Is: ${allArrElements}`)

let newArrD = [...new Set(allArrElements)]
console.log(`Array is: ${newArrD}`)

// Q5. Write a function that checks whether two strings are anagrams or not?

let str1 = 'silent';
let str2 = 'listen';

let newStr1 = str1.split('').sort().join('')
let newStr2 = str2.split('').sort().join('')

if(newStr1 === newStr2){
    console.log(`Both strings are anagrams`)
} else {
    console.log(`Strings are not anagrams`)
}


// Q6. Write a function that returns the number of vowels in a string.

function countOwels(string){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0
    for (const char of string.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(`Vowels Count is: ${count}`)
}
countOwels('Hello World')


// Q7. Write a function to find out largest number in an array

function findLargestNum(num){
    let largeNum = num[0]
    for(let i = 0; i < num.length; i++){
        if(num[i] > largeNum){
            largeNum = num[i]
        }
    }
    console.log(`Largest Number in array is: ${largeNum}`)
}
findLargestNum([10,12,41,22,11])

// Q8. Write a function to check id given number is prime or not?

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

// Q9. Write a function to calculate the factorial of a number

function findFactorial(num){
    console.log(`Number is ${num}`)
    let factorial = 1;
    for(let i=num; i>=1; i--){
        factorial = factorial * i
    }
    console.log(`Factorial of ${num} is ${factorial}`)
}
findFactorial(5)
findFactorial(4)

// Q10. Write a program to remove all whitespace characters from a string

function removeSpace(strchar){
    console.log(`String is ${strchar}`)
    let newStr = strchar.trim();
    let result = newStr.replace(/\s/gm, '')
    console.log(`New String is ${result}`)
}
removeSpace(' Interview,    Happy')

let spaceStirng = ' Interview,    Happy'
let removespc = spaceStirng.trim()
console.log(removespc)
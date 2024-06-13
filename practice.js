const val = [12,43,57,66,44,100,201,157];
let evenCount = 0;
let oddCount = 0;

for(let i=0; i<val.length; i++){
  if (val[i] % 2 == 0) {
    evenCount++
  } else {
    oddCount++
  }
}

console.log(evenCount)
console.log(oddCount)
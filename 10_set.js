

let rollNo = new Set();
rollNo.add(10);
rollNo.add(20);
rollNo.add(30);
rollNo.add(40);
rollNo.add(50);
rollNo.add(60);
console.log(rollNo);

console.log(rollNo.size);

rollNo.delete(60);
console.log(rollNo);

const isAvailable = rollNo.has(20);
console.log(isAvailable);

rollNo.add(60);
rollNo.add(70);
console.log(rollNo);

console.log(typeof rollNo);

for (const element of rollNo) {
    console.log(element);
}


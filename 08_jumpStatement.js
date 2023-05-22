
// 1 to 10

var iteration = 0;
for ( let i=1; i<=10; i++){
    iteration = iteration + 1;
    console.log(`Iteration Start: ${iteration}`);
    console.log(`${i}`);
    if(i==5){
        // break;
        continue;
    }
    console.log(`Iteration End: ${iteration}`);
}
console.log(`End Loop`);
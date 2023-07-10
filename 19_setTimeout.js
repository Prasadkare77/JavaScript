let display = function () {
    console.log(`Display`);
}
//1 Sec = 1000 Mili Sec
setTimeout(display,9000);

setTimeout(function(){
    console.log(100+100);
},5000);

setTimeout(()=>{
    console.log(`Inside Arrow Function...`);
},3000);
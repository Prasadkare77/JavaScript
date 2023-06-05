
var n1 = 100;
function outerFun(){
    let n2 = 200;
    let innerFun = function(){
        let n3 = 300;
        console.log(`Globle Variable n1 ${n1}`);
        console.log(`Outer Function Variable n2 ${n2}`);
        console.log(`Inner Function Variable n1 ${n3}`);
    }
    return innerFun;
}
let inner = outerFun;
console.log(inner);


let str = "Developer";
let res = str.charAt(0).toLowerCase();
console.log(res);
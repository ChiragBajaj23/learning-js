// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);//10
// console.log(b);//20
// console.log(c);//30

// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);// error
// console.log(b);// error
// console.log(c);//30

var a = 30;
let c = 50;
const b = 99;
if(true) {
    var a = 400;
    // console.log(a);//400
    // // let c = 600;
    // console.log(c);//600
    // const b = 234;
    // console.log(b);//234
    // b = 78// error
    c = 67// agar {} inke andar ek c delare hoga toh uski update nhi toh bahar wale ki value update
}
// console.log(a);// 400
// console.log(c);// 50
// console.log(b);//99

// point to remember = jab hum console main check krte hain global scope toh voh alag hai aur jab node chalake env main check krte hain toh alag hai

function one() {

    const username = "Chirag";

    function two() {
        const website= "bhailang"
        console.log(username);
    }
    // console.log(website);// yhana pe error aaega
    two();    
}
// one();

if(true) {
    const username = "Cbajaj";
    if(username=='Cbajaj') {
        const website = "yutube";
        // console.log(username+website);
    }
    // console.log(website);  // error 
}
// console.log(username); // error


console.log(addONe(5));// 6
function addONe(num) {
    return num + 1;
}
// console.log(addONe(5));// 6

// somewhere related to hoisting, execution context

console.log(addTwo(5))// ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2;
}
// console.log(addTwo(5));// 7

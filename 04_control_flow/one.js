// if (true) console.log('this will be printed'),
// console.log('this will also be printed as I put comma there, but it is not a godd practice');


// switch (key) {
//     case val:
//     case vll:
        
//         break;

//     default:
//         break;
// }
// iss case main val aur vll ke liye same hi code run hoga 
// agar switch main kisi case main answer match ho gaya aur humne vhaan pe break nhi likha toh aage  ke cases bhi chalenge lekin default wala nhi chalega
// yeh cheez ab nai languages main solve ho chuki 
// Switch cases use strict comparison (===).

// The values must be of the same type to match.

// A strict comparison can only be true if the operands are of the same type.

////---------------------Truthy and Falsy Values ---------------------

// const email = "chirag@ai";
const email = "";

if (email) {
    console.log('have the email');
} else {
    console.log('don\'t have the email');
}

//---> falsy Values
// 0, false, "", BigInt 0n, -0, null , undefined, NaN

// truthy values
// true, "0", 'false', " ", {}, [], function() {} empty function

const ymmail = [];
if (ymmail.length == 0) {
    console.log('empty array check krne ka tareeka');
}

const emptyObj = {};
if (Object.keys(emptyObj).length == 0) {
    console.log("empty object check krne ka tareeka");
    
}

console.log(false==0);//true
console.log(false=='');//true
console.log(0=='');//true
console.log(0==='');//false

// NUll Coalescing Operator (??) :null , undefined
// ismain yeh first value lega agar vo sahi hai toh, lekin agar vo null/undefined hai toh secod utha lega
let val1;
val1 = 5 ?? 10;
console.log(val1);// 5

let val2;
val2 = null ?? 10;
console.log(val2);// 10

let val3;
val3 = undefined ?? 15;
console.log(val3);// 15

let val4;
val4 =  null ?? undefined;
console.log(val4);// undefined lega iss case (second value utha raha yahan pe)

let val5 = null ?? 10 ?? 30;
console.log(val5);// 10

// terniary operator
// condition ? a : b
val6 = 40 > 50 ? console.log("false") : console.log("true");


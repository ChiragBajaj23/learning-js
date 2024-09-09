// let score = "33";

// console.log(typeof score);

// let pScore = "33abc";// same as string result
// let nullScore = null;
// let undefinedScore = undefined;

// let valueInNumber = Number(score);
// let valueInNumberP = Number(pScore);
// let valueInNumberNull = Number(nullScore);
// let valueInNumberUndefined = Number(undefinedScore);

// // console.log(typeof valueInNumber, "valueinnumber type"); // number
// // console.log(valueInNumber, "valueinnumber"); // 33

// // console.log(typeof valueInNumberP, "typeof valueinnumberP"); // number
// // console.log(valueInNumberP, " valueinnumberP"); // NaN

// // console.log(typeof valueInNumberNull, "typeof valueInNumberNull"); // number
// // console.log(valueInNumberNull, " valueInNumberNull"); // 0

// // console.log(typeof valueInNumberUndefined, "typeof valueInNumberUndefined"); // number
// // console.log(valueInNumberUndefined, " valueInNumberUndefined"); // NaN

// // const isLogged = "zxcvb";

// // const isLoggedInNumber = Boolean(isLogged);

// // console.log(isLoggedInNumber);//true
// // console.log(typeof isLoggedInNumber);//boolean

// const isNumber = 12345;

// const isNumberInString = String(isNumber);

// console.log(isNumberInString);//true
// console.log(typeof isNumberInString);//boolean


/*****************Operations************** */

const gretting = 'Namaste ';
const name = 'Chirag';
let str = gretting + name;
console.log(str);

console.log(1+1);// 2
console.log(1+'1'); // 11
console.log('1'+1);// 11
console.log(1+2+'3'); // 33
console.log('1'+2+3); // 123

console.log(+true); // 1 , because true is also converted and it will give give 1 one value
// console.log(true+); // error , because it doesnot make sense
console.log(+"");// 0
// postfix and prefix
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
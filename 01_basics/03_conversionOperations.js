let score = "33";

console.log(typeof score);

let pScore = "33abc";// same as string result
let nullScore = null;
let undefinedScore = undefined;

let valueInNumber = Number(score);
let valueInNumberP = Number(pScore);
let valueInNumberNull = Number(nullScore);
let valueInNumberUndefined = Number(undefinedScore);

// console.log(typeof valueInNumber, "valueinnumber type"); // number
// console.log(valueInNumber, "valueinnumber"); // 33

// console.log(typeof valueInNumberP, "typeof valueinnumberP"); // number
// console.log(valueInNumberP, " valueinnumberP"); // NaN

// console.log(typeof valueInNumberNull, "typeof valueInNumberNull"); // number
// console.log(valueInNumberNull, " valueInNumberNull"); // 0

// console.log(typeof valueInNumberUndefined, "typeof valueInNumberUndefined"); // number
// console.log(valueInNumberUndefined, " valueInNumberUndefined"); // NaN

// const isLogged = "zxcvb";

// const isLoggedInNumber = Boolean(isLogged);

// console.log(isLoggedInNumber);//true
// console.log(typeof isLoggedInNumber);//boolean

const isNumber = 12345;

const isNumberInString = String(isNumber);

console.log(isNumberInString);//true
console.log(typeof isNumberInString);//boolean
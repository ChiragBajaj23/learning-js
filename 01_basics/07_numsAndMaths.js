const score = 400;
// console.log(score); // 400

const balance = new Number(100.00);
// console.log(balance); // [Number:100]

// console.log(balance.toString().length);//string bana dega aur length bhi bata dega
// console.log(balance.toFixed(2));// decimal palces tk bata dega aur agar koi number na ho toh zero consider krega aur normal value hi return krega

const otherNum = 123.8909;
// console.log(otherNum.toPrecision(1));//dhyan se use krna isko, yeh decimal se pehele wali value ko preference deta hai.Isko ek baar alag values ke liye chala ke dekhna

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));// isse value main comma lag jaenge aur proper set ho jaegi default US ke hisaab se,lekin agar Indian standard ke hisab se krna hai toh en-In krna hoga

/*******************************************MATHS*************************************** */

// console.log(Math);
// console.log(Math.abs(-4));// negative ko positive main krdega aur positive toh positive hi rahengi
// console.log(Math.round(4.5));// round off krdega, 4.5 aur 4.5 se badi ko 5 dega aur isse chotti ko 4 krdega
// console.log(Math.ceil(4.2));// ceil wali value value dega yahan pe 5
// console.log(Math.floor(4.8));// floor wali value value dega yahan pe 4

console.log(Math.random());// 0 aur 1 ke beech main value dega yeh
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max-min+1)) + min);

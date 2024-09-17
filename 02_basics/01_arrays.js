let myArr = [0,1,2,3,4,5,true,"Chigs"];

// let myHeroes = ["Shaktiman", "Naagraaj"];

// let myArr2 = new Array(1,2,3,4,5);//another way of declaring an array

// console.log(myArr[0]);

// // Methods

// myArr.push(6);// will add this value in last
// myArr.push(7);

// console.log(myArr);
// myArr.pop();// will reomove the last element
// console.log(myArr);

// myArr.unshift(9);// array ke starting main 9 ko add krdega
// myArr.shift();// array ke start se value remove krdega

// console.log(myArr.includes(56));// will return false if this value is not there and it will return true if the value is inside the arr
// console.log(myArr.indexOf(45));// will give the index if th value is present and will give -1 if value is not present

// console.log(myArr.join());// will convert array into , its type will be string

// slice and splice
console.log("A", myArr);//A [ 0, 1, 2, 3, 4, 5, true, 'Chigs' ]
let newArr1 = myArr.slice(1,3);// returns a 'copy' of the section of array , includes 1 but not 3
console.log(newArr1);//[ 1, 2 ]
console.log("B", myArr);// B [ 0, 1, 2, 3, 4, 5, true, 'Chigs' ]
let newArr2 = myArr.splice(1,3);// it will impact the 'original' array. 1 se 3 tk (including both) jo bhi hoga vo original array main se nikal jaega aur newArr2 main aa jaega aur original Array main baaki values bachengi aur print ho jaengi
console.log("C", myArr);// C [ 0, 4, 5, true, 'Chigs' ]
console.log(newArr2);// [ 1, 2, 3 ]
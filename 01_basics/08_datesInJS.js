let myDate = new Date();//

// console.log(myDate.toString());// Tue Sep 17 2024 16:04:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());// Tue Sep 17 2024
// console.log(myDate.toISOString());// 2024-09-17T16:04:22.063Z
// console.log(myDate.toJSON());// 2024-09-17T16:04:22.063Z
// console.log(myDate.toLocaleDateString());// 9/17/2024
// console.log(myDate.toLocaleString());// 9/17/2024, 4:04:22 PM
// console.log(myDate.toLocaleTimeString());// 4:04:22 PM

// console.log(typeof myDate);// object

// let myCreatedDate = new Date(2023, 0, 23);// 0 here is month, if you are write in this format then month start with 0
// let myCreatedDate = new Date(2023,0, 23, 5, 3);// it will add time as 5pm 3 min
// let myCreatedDate = new Date("2023-01-14");// here month will start from 1 result-> 1/14/2023, 12:00:00 AM
// let myCreatedDate = new Date("01-14-2023");// result -> 1/14/2023, 12:00:00 AM

// console.log(myCreatedDate.toLocaleString());

// let myTimestamp = Date.now();
// console.log(myTimestamp);// millisecond value

// console.log(myCreatedDate.getTime());//millisecond value

// console.log(Math.floor(Date.now()/1000));// in seconds

// console.log(myDate);
// console.log(myDate.getMonth());// 0 se start hota hai 0-january
// console.log(myDate.getDay());// monday ko 1 manke chalta hai

console.log(myDate.toLocaleString('Default',{
    weekday:'long',
    hour:'2-digit'
}))// here it can be more customized
console.log(myDate);






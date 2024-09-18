let marvel_heroes = ["thor","ironman","captain"];

let dc_heroes = ["superman","batman","flash"];

// marvel_heroes.push(dc_heroes);// no need to staore in differnet variable for push

// console.log(marvel_heroes);//[ 'thor', 'ironman', 'captain', [ 'superman', 'batman', 'flash' ] ] 
// console.log(dc_heroes);// [ 'superman', 'batman', 'flash' ]

// const all_heroes = marvel_heroes.concat(dc_heroes);// for concat,we need to store in a variable

// console.log(all_heroes); // [ 'thor', 'ironman', 'captain', 'superman', 'batman', 'flash' ]

// const all_newheroes = [...marvel_heroes, ...dc_heroes];//  spread operator
// console.log(all_newheroes);// [ 'thor', 'ironman', 'captain', 'superman', 'batman', 'flash' ]

// const another_array = [1,2,3,4,[5,6,7],8,9,[2,3,5,[7,8,9]]];
// const new_anotherarray = another_array.flat(Infinity);// store it in a variable , can be dne to infinty depth if many arrays are there
// console.log(new_anotherarray);

console.log(Array.isArray("Chirag"));// false // checks whether the given term is an array or not
console.log(Array.from("Chiggs")); // [ 'C', 'h', 'i', 'g', 'g', 's' ] // converts the given term in an array
console.log(Array.from({name:'Chiggssss'})); // intersting case, here we have not provided that what it should do with the keys, it will return an empty array []

let score1 = 100;
let score2 = 200;
let score3 = 300;
const hiiii = Array.of(score1,score2,score3);// make an array of these things
console.log(hiiii);// [100,200,300]
// for of

const arr = [1,2,3,4,5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "Namaste Bhai";

for (const char of greetings) {
    // console.log(`charaters are ${char}`);
}

//MAP

const map = new Map();
map.set('Bh', 'Bharat');
map.set('US', 'United States');
map.set('Ch', 'China');

for (const con of map) {
    // console.log(con);
}

for (const [key, value] of map) {
    // console.log(key, ' :- ', value);
}

const myObject = {
    game1: 'cric',
    game2: 'football'
}

// for (const obj of myObject) {
//     console.log(obj); // TypeError: myObject is not iterable
        
// }

// for in

const newObject= {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift'
}

for (const key in newObject) {
    // console.log(`${key} is ${newObject[key]}`);
}

const programming = ['js','cpp','ruby','swift'];

for (const key in programming) {
    // console.log(`key -> ${key} and value -> ${programming[key]}`); // for in main yeh key leta hai aur for of main value leta hai
}

const map2 = new Map();
map2.set('Bh', 'Bharat');
map2.set('US', 'United States');
map2.set('Ch', 'China');

for (const key in map2) {
    console.log(key);// it will not work on map (does not give error, but will not print anything)
}
for (const [key, value] in map) {
    console.log(key, ' :- ', value);// it will not work on map (does not give error, but will not print anything)
}
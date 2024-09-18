// singleton -> jab bhi object constructor se banega toh singleton banega yani ki yeh apni tarah ka ek hi object hai, lekin jab aap doosri tarah se banate hain yani ki literals se banate hain toh uske bohot saare instances bante hain, singleton nhi banta uss case main
// Object.Create

// dono tareke se object hi aata hai , koi performance pe asar nhi hai

//object literals

const mySmy = Symbol("Key1");

const myObj = {
    name: "Chirag",
    "full name": "Chirag Bajaj",
    // mySmy: "myKey1",// aise use krne pe string lega vo
    [mySmy]: "myKey1",// correct way of writing symbol in object
    age: 24,
    location: "Fatehabad",
    email: "abc@xyz.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday","Tuesday"]
};
// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj['full name']);
// console.log(myObj.mySmy); // myKey1 // yeh pehele wale mySmy ke liye
// console.log(typeof myObj.mySmy); // string // yeh pehele wale mySmy ke liye
// console.log(myObj[mySmy]);// yeh sahi tareeka hoga symbol ko access krne ka
// console.log(typeof myObj[mySmy]); // yeh toh string hi hai
// console.log(myObj);// ispe abhi last symbol dikhega jisko mySym bola tha

// Object.freeze(myObj);// yeh krne pe hum object ki value ko change nhi kr skte lekin agar change krte hain toh yeh error nhi dega lekin value change bhi nhi hogi

// js main function ko type1 citizen ki tarah treat kiya jaata hai jiska mtlb hai ki aapke functions main koi discrimination nhi hoga , aap unko variables ki tarah bhi treat kr skte ho

myObj.greeting = function() {
    console.log("Namaste JS User");
}

myObj.greetingTwo = function() {
    console.log(`Namaste JS User, ${this["full name"]}`);// string interpolation (backtick usekrke value print krna),'this' issi object ko refer krne ke liye hai
}
console.log(myObj.greeting);// [Function (anonymous)]
myObj.greeting();// Namaste JS User
console.log(myObj.greeting());// Namaste JS User undefined
myObj.greetingTwo();// Namaste JS User, Chirag Bajaj



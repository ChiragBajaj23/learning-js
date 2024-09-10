// two types of datatypes -> primitive and non prmitive (on the basis of how the data is stored in these datatypes and how to access these datatypes)

// primitive -> call by value (mtlb inki ek capy banti hai aur vo value di jaati hai na ki koi reference diya jaata hai)
// -> 7types- > String, Number, Boolean, null, undefined, symbol, bigint
const outsideTemp = null; // datatype -> object
let userUndefined; // why cant I use const here // dataype - > undefined
const id = Symbol('123'); // dataype -> Symbol
const anotherId = Symbol('123'); // dataype -> Symbol
console.log(id === anotherId); // false

const bigNumber = 123456765433456543456543454n;//bigint last main n
console.log( typeof bigNumber); // datatype-> bigint

// Reference (Non-primitive) - > call by reference

// Arrays, Objects, functions
// inns ab ks dataype object hi hai , lekin function ke datatpe ko object-function bol dete hain
const heroes = ["abc", "def", "ghi"]; 
const myObj = {
    name: "Chirag",
    age : 24
}
const myFunction = function() {
    console.log('My Function');
}


// / js is dynamically typed -> Dynamically typed language: These are the languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself. In these languages, interpreters assign the data type to a variable at runtime depending on its value.

//primitive(stack memory) non-primitive(heap)

let oneName = "ChiragBajaj";
let anotherName = oneName;
anotherName = "BajajSahab";

console.log(oneName); // ChiragBajaj
console.log(anotherName);//BajajSahab
// primitive main value copy hoti hai , refernece nhi diya jaata

// ab non primitive ki baari
let oneUser = {
    email: "abc@gmail.com",
    upi: "xyz@ybl"
};

let twoUser = oneUser;

twoUser.email = "xyz@yahoo.com";

console.log(oneUser);
console.log(twoUser);
//dono main email change ho jaega, yahi refernce diya jaata hai aur uspe change kiya jaata hai

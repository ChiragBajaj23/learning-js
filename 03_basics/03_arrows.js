const user = {
    name: "Chirag",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.name} , welcome sir`);// 'this' keyword lega current context  // Chirag , welcome sir // LKJHG , welcome sir
        console.log(this);   // {
        //     name: 'Chirag',
        //     price: 999,
        //     welcomeMessage: [Function: welcomeMessage]
        //   }
    }
}

// user.welcomeMessage();
// user.name = "LKJHG";
// user.welcomeMessage();

// console.log(this); // node env main 'this' ek {} empty object ko refer kr raha hoga kyunki abhi global main koi object nhi hai. lekn  jab yahi cheez hum browser main krenge toh vahan pe yeh ek window object dega.browser ke andar global object hai window object tabhi toh aap saare event capture kr paate hain jaise ki click, alert etc. 

function chai() {
    console.log(this);// yeh this ko jab kisi function main print krwaenin node env main toh yeh niche likhi cheezen dega
    // <ref *1> Object [global] {
    //     global: [Circular *1],
    //     clearImmediate: [Function: clearImmediate],
    //     setImmediate: [Function: setImmediate] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     clearInterval: [Function: clearInterval],
    //     clearTimeout: [Function: clearTimeout],
    //     setInterval: [Function: setInterval],
    //     setTimeout: [Function: setTimeout] {
    //       [Symbol(nodejs.util.promisify.custom)]: [Getter]
    //     },
    //     queueMicrotask: [Function: queueMicrotask],
    //     structuredClone: [Function: structuredClone],
    //     atob: [Getter/Setter],
    //     btoa: [Getter/Setter],
    //     performance: [Getter/Setter],
    //     fetch: [Function: fetch],
    //     crypto: [Getter]
    //   }
    
}
// chai();

function chaiPaani() {
    const username = "chirag";
    console.log(this.username); // undefined dega yahan pe// iska mtlb hum apne iss cntext ko function ke andar use nhi kr paa rahe , hum isko object main use kr rahe the
    
}
// chaiPaani();

const Paani = function () {
    const username = "chirag";
    console.log(this.username);// undefined
}
// Paani()

const arrowfunc = () => {
    const username = "Nahajs";
    console.log(this.username);// undefined
    
}
// arrowfunc();

const adf = () => {
    console.log(this); // {} // yahan pe unlike normal function , humme empty object mil raha hai   
}
// adf(); 

// const addTwo = (num1, num2) => {
//     return num1 + num2; // explicit return 
// }
// console.log(addTwo(3,4)); // 7

// const addTwo = (num1, num2) => num1 + num2 // yeh implicit return hai, yahan pe return likhne ki jarurat nhi , hum maan lete hain ki yeh va,ue ko return kr dega
// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(4,8)); // 12

const objReturn = () => {username: "Bajaj"}

console.log(objReturn()); // yahan pe undefined dega jab hum {} main object likh ke return kr denge hume agar yeh krna hai toh isko () wrap krna hoga

const correctObj = () => ({username: "Chirag"})
console.log(correctObj()); // { username: 'Chirag' }

// doubt -> arrow functiona main this print krne pe {} aaya aur normal main ek doosra object aaya , aisa kyun
// function twoSum(num1, num2) {
//     console.log(num1+num2);
// }
// twoSum(3,"df");// 3df
// twoSum(3,"5");// 35
// twoSum(3,5);// 8
// const result = twoSum(3,5);
// console.log(result);// undefined, kyunki return nhi kiya gaya hai 

// function myTowSum(num1, num2) {// parameters
//     return num1 + num2;
// }
// const result = myTowSum(4,7)// arguments
// console.log(result);

function userLoggedIn(username = "chirag") {// yahan pe default value dedi, yeh tab chalegi jab koi value hi nhi di hogi isko
    // if(username === undefined) {
    if(!username) {
        console.log("please enter a valid username");
        return;
    }
    return `${username} ,just logged in`;
}
// console.log(userLoggedIn())// it will take value as undefined
// console.log(userLoggedIn("asdf"))// it will take value as undefined

function calculateCartPrice(...num1) { // yeh yahan pe rest operator hai, isko hum spread operator bhi kahate hain lekin yahan pe yeh rest operator ki tarah use ho raha hai
    return num1;
}

// console.log(calculateCartPrice(200));//[200]
// console.log(calculateCartPrice(200, 30, 40, 50 ,600));//[ 200, 30, 40, 50, 600 ]

function calculateCartPrice2(val1,val2,...num2) {
    return num2;
}
// console.log(calculateCartPrice2(100,2003,400404,40004,3044));//[ 400404, 40004, 36 ] // iss case main val1, val2, pehele valie values lelenge aur baaki value will bein num2

function myObject(anyObject) {
    console.log(` the username is ${anyObject.username} and the price is ${anyObject.price}`); // basically jo naam parameter main diya (yahan pe anyObject) vai naam use krna hoga inside the function
}

myObject({
    username: "chiag",
    price : 2345
})
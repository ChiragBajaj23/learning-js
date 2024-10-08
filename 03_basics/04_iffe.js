// Immediately Invoked Function Expression (IIFE) -- jaise hi aapne function likha , usko turant hi execute krana hai aur saath main agar hum yeh chaah rahe hain ki humare global scope se humara function pollute na ho jae toh iske liye hum iife likte hain

function chai() {
    console.log('chai funiton');
}
chai();// normally funtion aise invoke ho jaata hai 
// lekin iife krne ke loye yeh krna hoga
//   ()() -> do parenthesis hain,ismain ek main toh hum wrap kr rahe hain ,doosra invoke kr dega
(
    function doosriChai(random){
        // named iife
        console.log(`doosri chai ${random}`);
    }
) ("asdf");
// gloabl scope ke variables ko hatane ke liye iske andar se , humne aisa kiya

(
    () => {
        console.log(`doosri chai`);
    }
) () ; 
// yahan pe humne ek doosra iife invoke kiya jo ki arrow function hai. ab ismain kya ho raha hai ki chahe yeh arrow funciton ho ya normal , lekin agar humne doosra iffe invoke kr dia aur humne pehele wale ko end nhi kiya toh yeh eror dega , iske liye hume pehele wale ke last main semicolon ; lagan hoga
// semicolon bina lagae normal fcuntion chal jaega lekin iife nh chalega , balki error dega
function chai2() {
    console.log('chai funiton');
}
chai2();

(
    (name) => {
        console.log(`doosri chai ${name}`);
    }
) ("Chirag") // this is how argukemt and parametr is given and taken in iife 
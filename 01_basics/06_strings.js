const str = "NewString";

const anotherString = new String('ThisIsAlso-String');//another method of declaring string

console.log(anotherString[0]);// this will return T; here string will behave as object

console.log(anotherString.__proto__);// this is uderscoreundrscore proto underscoreunderscore , you can check in the browser for this prototype, their it will have all the methods, but here it will give only empty {};

console.log(anotherString.length);//will give length
console.log(anotherString.toUpperCase());// will give it in upper case, it will not change the real value, only change the copy


console.log(anotherString.charAt(2));
console.log(anotherString.indexOf('s'));

const newString = anotherString.substring(0,4);//will include 0 and exclde 4 // yahan pe agar negative valuse dede toh yeh first index ke liye toh zero se hi maanega lekin second wale keliye negative dene pe yeh kuch result nhi dega
console.log(newString);

const gameRule = anotherString.slice(5,-9);//yahan pe negative vallues kaam krti hain,lekin first index min kaam nhi kr rahi lekin youtube video main kaam kr rahi thi pata nhi kaise
console.log(gameRule);

const airForce = "         AirForce   . .  ";
console.log(airForce.trim());//starting aur end ke space remove krdega, ismain trimstart aur trimend bhi hota lekin trim() dono ka hi kaam krdega. yeh whitespaces aur line terminators(/n) pe kaam krta hai

const url = "https://ChiragBajaj.com/Chirag%20Bajaj";
url.replace('%20','???');
console.log(url);// this will be same
console.log(url.replace('%20','-'));//this will be differnet
console.log(url.includes('Chirag'));
console.log(anotherString.split('-'));

console.log(`I am writing a ${str}`);

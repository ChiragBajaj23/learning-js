// console.log("2" > 1); // true
// console.log("02" > 1); // true

// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true
// for NULL compariosn with 0 ,the reason is that equality check == and comparison < > >= <= behave differently. Comparison converts null as number treating it as zero.That's why this is the result above .


// console.log(undefined > 0);//false
// console.log(undefined == 0);//false
// console.log(undefined >= 0);//false

console.log('2' == 2)//true
console.log('2' === 2)//false

const coding = ['java','js','ruby','pyhton'];

coding.forEach( function (item) {   // here we have to give a callback function
    // console.log(item);// will print values
})

coding.forEach( (item) => { // yeh bhi callback hi hai, kaam same hi hai, bas yahan pe humne arrow function use kr lia
    // console.log(item);
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe)// yaha pe sirf refernece diya function ka , usko execute nhi kiya, lekin yeh apne aap kr lega

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);// java 0 [ 'java', 'js', 'ruby', 'pyhton' ]
})

const myCoding = [
    {
        languageName: 'javascrpit',
        filename: 'js'
    },
    {
        languageName: 'java',
        filename: 'javs'
    },
    {
        languageName: 'python',
        filename: 'py'
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
const tinderUser = new Object(); // singleton/ constructor

tinderUser.id = 12345;
tinderUser.name = "Chirag";
tinderUser.loggedIn = true;

// console.log(tinderUser);

const regularUser = {
    name: "CHirag",
    fullNAme: {
        listen :{
            surname: "Bajaj",
        }
    }
}

// console.log(regularUser.fullNAme?.listen);// optional chaining -> yeh '?' laga diya jaata hai , chekc krta hai ki ki agar fullname exist hi na krta ho toh, error handling kr lega

const obj1 = {1: "a", 2: "b"};
const obj2 = {2: "c", 3: "d"};
const obj3 = {3: "e", 4: "f"};
// const obj4 = {obj1, obj2, obj3};
// console.log(obj4);
// {
    //     obj1: { '1': 'a', '2': 'b' },
    //     obj2: { '2': 'c', '3': 'd' },
    //     obj3: { '3': 'e', '4': 'f' }
    //   }
    
// const obj4 = {...obj1, ...obj2, obj3};// { '1': 'a', '2': 'c', '3': 'd', obj3: { '3': 'e', '4': 'f' } }

const obj4 = Object.assign({}, obj1, obj2, obj3);// target , source -> { '1': 'a', '2': 'c', '3': 'e', '4': 'f' }
// const returnedObject = Object.assign(target,source)// here (returnedObject === target)-> true
// console.log(obj4);// { '1': 'a', '2': 'c', '3': 'e', '4': 'f' }

// console.log(tinderUser);// { id: 12345, name: 'Chirag', loggedIn: true }
// console.log(Object.keys(tinderUser));// [ 'id', 'name', 'loggedIn' ]
// console.log(Object.values(tinderUser));// [ 12345, 'Chirag', true ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', 12345 ], [ 'name', 'Chirag' ], [ 'loggedIn', true ] ]

// console.log(tinderUser.hasOwnProperty("loggedIn")); // true

const course = {
    CorseName: "javascript",
    price: 122,
    CourseInstructor: "Chirag"
}

const {CourseInstructor} = course; // same as writing course.courseInstructor, it can also be written like this as we writing in next line
const {price : coursePrice} = course;// here now we can refer price as coursePrice
// yeh hai destructuring
// console.log(CourseInstructor);
// console.log(coursePrice);

// const navbar = (props.company) => { // yahan pe props.company lete hain lekin react js main jab hum isse use kr rahe hain toh hum yaha pe props.company ki jagah aise bhi use krlete hain directly {company} , yahi jo destructuring upar ki hai

// }
// navbar(company="CHirag");

// JSON - javascript Object Notation

// {
//     "abc":"qer",
//     "vfd":344,
//     "rty":true
// }

// [
//     {},
//     {},
//     {}
// ]

// this is how we get the data from apis in json response format 
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

console.log(this); // node env main 'this' ek {} empty object ko refer kr raha hoga kyunki abhi global main koi object nhi hai. lekn  jab yahi cheez hum browser main krenge toh vahan pe yeh ek window object dega.browser ke andar global object hai window object tabhi toh aap saare event capture kr paate hain jaise ki click, alert etc. 

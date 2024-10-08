# learning-js (singlethreaded language)
topic- Javascript Execution Context (EC)
- Global EC (ismain 'this' keword hai jo ki window ko point kr raha hai)
- Functional EC
- Eval EC (yeh ek property hai global ki, yeh abhi itna jaruri nhi hai aone liye)
ab kya hota hai yahan pe do phase hote hain
- memory creation phase (also reffered as creation phase)
- execution phase

step1 - ab kya hota hai ki jo bhi js ka code run hoga vo global execution(env) main jaega aur vahan pe isko 'this' allocate hoga
step2 - memory execution phase main ab aa gae hum , ismain jo bhi variables the unko lenge aur un sab main undeifned value daal denge, jo bhi function honge unmain hum log 'defination' daal denge. yeh memory execution ko bolte hain 'first cycle', yeh hoga hi hoga hamesha.
step3 - phir aata hai execution phase, yahan pe jo variables the unko unki values assign ki jaati hai, phir jo bhi function defination thi usmain toh kuch nhi hota lekin jab vo function ko execute krne ki baari aati hai toh, vahan pe ek naya execution context banta hai. jab jab fucntion run hoga , tb tb execution context alag se banega function ke liye aur iss execution context main hoga new variable env aur saath main execution thread.Aur ab kyunki naya execution context bana funtion ke liye toh yeh do kaam - memory creation aur execution phase dobaara honge isske liye. global EC ka kaam ho chuka, voh ek baar hi hota hai, lekin baaki kaam dobaara honge uss funtion ke liye aur jab jab function invoke hua tha , tab tab yeh context banega aur iski value return hogi global execution context main. Aur ek baar value return krne aur poora chlne ke baad yeh execution context jo iss function ke liye bana tha , yeh delete ho jaega . agar dobara yeh fucntion invoke hua toh smae hi process chalega aage bhi.

aur phir ismain callstack hai jismain global execution context aur phir ek ke baad ek fucntion aaenge jaise jaise unko call lagti rahegi. aur jaise hi unka kaam poora hoga vo bahar nikal jaenge
console.log("Hello I am conditional tutorial")

let age = 3;
// let grace = 2;

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

if(age>18){
    console.log("You can drive");
}

else{
    console.log("You can't drive");
}


// == Checks the value only
// === Checks the value and Type

a = 6;
b = 8
let c = a > b ? a - b : b - a;
console.log(c)

/* THIS IS SAME AS ABOVE
if(a > b){
let c c= a - b;
}

else{
let c = a - b;
}

console.log(c)
*/
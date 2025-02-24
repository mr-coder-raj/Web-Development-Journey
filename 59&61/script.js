let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if(random > 0.1){
    //Performs correct calculations
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result id ${eval(`${a} ${c} ${b}`)}`)
}


else{
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
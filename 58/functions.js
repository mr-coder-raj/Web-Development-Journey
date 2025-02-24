function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " course is good too!")
}

function sum(a, b, c = 3) {  // Here, "c" is called as default parameters, aur ye optional hai
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}
result1 = sum(3, 5)
result2 = sum(7, 5)
result3 = sum(14, 5, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

// nice("Rohan")
// nice("Shivam")\

const func1 = (x) => {
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);
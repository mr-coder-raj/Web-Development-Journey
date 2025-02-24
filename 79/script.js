let a = prompt("Enter first Number");

let b = prompt("Enter second Number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry bhai ye nhi kar skte")
}

let sum = parseInt(a) + parseInt(b);

// console.log("The sum is", sum);
function main() {
    let x = 1;
    try {
        console.log("The sum is", sum * x)
        return true;
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false;
    }
    finally{
    console.log('Files are being closed and db connnecion is being closed');
    }
}

let c = main();
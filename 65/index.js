let a = 6

function factorial1(number) {
    let arr = Array.from(Array(number + 1).keys())
    let c = arr.slice(1,).reduce((a, b) => {
        return a * b
    })
    return c
}

function factorial2(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}


console.log(factorial1(a))
console.log(factorial2(a))

let rand = Math.random()
let first, second, third
// 0 0.33 0.66 1

// Lets generates the first word
rand = Math.random()
if (rand < 0.33) {
    first = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"
}
else {
    first = "Fire"
}

// Lets generates the Second word
rand = Math.random()
if (rand < 0.33) {
    second = "Engine"
}
else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods"
}

else {
    second = "Garments"
}

// Lets generates the Third word
rand = Math.random()
if (rand < 0.33) {
    third = "Bros"
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"
}

else {
    third = "Hub"
}

console.log(`${first} ${second} ${third}`)
import fs from "fs/promises"

let a = await fs.readFile("harry.txt")


let b = await fs.appendFile("harry.txt","\n\n\n\n\n this is amazing Project")
console.log(a.toString());
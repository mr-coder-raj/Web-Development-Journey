const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))

app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log(req.headers);
    req.harry = "I am harryBhai";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    // res.send("Hacked by Middleware 1")
    next() //Abhi res.send ke baad next karneka koi faayda nhi hai
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am rohanBhai";
    next()
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about! ' + req.harry)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



//Timestamp ko time me convert kar lena ChatGPT bata degaa.
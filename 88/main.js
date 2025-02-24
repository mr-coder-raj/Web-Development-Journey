const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

//app.get or appp.get or app.put or app.delete(path, handler)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me')
})


app.get('/blog/:slug', (req, res) => {
    //logic to fetch intro to JS from db
    //For URL: http://localhost:3000/blog/there-my-name-is-raj?mode=dark&reion=in
    console.log(req.params);  //Will output: { slug: 'there-my-name-is-raj' }
    console.log(req.query);  //Will output: { mode: 'dark', region: 'in' }

    res.send(`hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     //logic to fetch intro to JS from db
//   res.send('Hello Javascript')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to Python from db
//   res.send('Hello Python')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000;

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

// app.get('/', (req, res) => {
//   console.log('Hey its a get request');
//   res.send('Hello World2!')
// })

// app.post('/', (req, res) => {
//   console.log('Hey its a post request');
//   res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//   console.log('Hey its a put request');
//   res.send('Hello World put!')
// })

// ---Uppr code is also write as down (both r same),  "Down side code is also called as chain of requests"----

app.get('/', (req, res) => {
  console.log('Hey its a get request');
  res.send('Hello World2!')
}).post('/', (req, res) => {
  console.log('Hey its a post request');
  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log('Hey its a put request');
  res.send('Hello World put!')
})    //agar aapko text dena hai toh

app.get('/index', (req, res) => {
  console.log('Hey its index');
  res.sendFile('template/index.html', { root: __dirname })
})    //agar aapko html file deni hai toh

app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name:["harry", "Raj"] })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
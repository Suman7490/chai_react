require('dotenv').config();
const express = require('express')
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('<h1>Hello Suman!</h1>')
})
app.get('/suman', (req, res) => {
    res.send('<h1>Hello Suman!</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`app is listening`)
})
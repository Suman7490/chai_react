require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();
app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
      res.send('Hello World!')
})
app.get('/home', (req, res) => {
  res.send('Hello Suman!')
})




app.listen(process.env.PORT || 4000, () => {
  console.log(`app is listening`)
})
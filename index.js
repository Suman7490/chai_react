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
  const list = [
    {
      id:1,
      name:'suman',
      email:'suman@gmail.com'
    },
    {
      id:1,
      name:'manju',
      email:'manju@gmail.com'
    },
    {
      id:3,
      name:'Dheeraj',
      email:'dheeraj@gmail.com'
    }
  ]
  res.send(list)
})




app.listen(process.env.PORT || 4000, () => {
  console.log(`app is listening`)
})
require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mysql = require('mysql')

const app = express();
app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, // or the username you created
  password: process.env.DB_PASSWORD,
  database: process.env.DB
});
db.connect((err) => {
  if (err) {
    console.log('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
  const list = [
    {
      id: 1,
      name: 'suman',
      email: 'suman@gmail.com'
    },
    {
      id: 1,
      name: 'manju',
      email: 'manju@gmail.com'
    },
    {
      id: 3,
      name: 'Dheeraj',
      email: 'dheeraj@gmail.com'
    },
    {
      id: 4,
      name: 'Hema',
      email: 'hema@gmail.com'
    }
  ]
  res.send(list)
})

app.get('/register', (req, res) => {
  const sql = 'SELECT * FROM register';

  // Execute the query
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).send('Server error');
      return;
    }

    // Send the result as a JSON response
    res.json(result);
  });
});


app.listen(process.env.PORT || 4000, () => {
  console.log(`app is listening`)
})
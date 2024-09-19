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
  const sql = `
      SELECT q.quotation_id, q.name, q.email, q.gender, q.designation, q.domain, q.description, 
             q.price, q.quantity, q.date, q.entitle, q.total, q.discount, q.grandTotal, q.inputCount,
             p.label, p.dueWhen, p.installmentAmount
      FROM quotation q
      INNER JOIN payments p ON q.quotation_id = p.quotation_id
  `;



  db.query(sql, (err, result) => {
      if (err) return res.json({ Message: "Error inside server" });
      const data = {}
      result.forEach(row => {
          // If the quotation_id is not already in the data object, create it
          if (!data[row.quotation_id]) {
              data[row.quotation_id] = {
                  id: row.quotation_id,
                  name: row.name,
                  email: row.email,
                  gender: row.gender,
                  date: row.date,
                  designation: row.designation,
                  domain: row.domain,
                  entitle: row.entitle,
                  description: row.description,
                  totalInstallment: 0,
                  price: row.price,
                  quantity: row.quantity,
                  total: row.total,
                  discount: row.discount,
                  grandTotal: row.grandTotal,
                  inputCount: row.inputCount,
                  installments: []
              };
          }

          // Add the installment data to the installments array
          if (row.label) {
              data[row.quotation_id].installments.push({
                  label: row.label,
                  dueWhen: row.dueWhen,
                  installmentAmount: row.installmentAmount
              });
              data[row.quotation_id].totalInstallment++;
          }
      });

      // Convert the object into an array if necessary
      const response = Object.values(data);
      return res.json(response);
  });
});


// ************ Create Invoice ***************
app.post('/create', (req, res) => {
  const quotation_sql = "INSERT INTO quotation (`name`, `email`, `gender`, `date`, `designation`, `domain`, `entitle`, `description`, `price`, `quantity`, `total`, `discount`, `grandTotal`, `inputCount`) VALUES (?)";
  const quotation_values = [
      req.body.name,
      req.body.email,
      req.body.gender,
      req.body.date,
      req.body.designation,
      req.body.domain,
      req.body.entitle,
      req.body.description,
      req.body.price,
      req.body.quantity,
      req.body.total,
      req.body.discount,
      req.body.grandTotal,
      req.body.inputCount
  ];

  db.query(quotation_sql, [quotation_values], (err, result) => {
      if (err) return res.json(err);

      const quotationId = result.insertId;
      const installments = req.body.installments.map(installment => [
          quotationId,
          installment.label,
          installment.dueWhen,
          installment.installmentAmount
      ]);

      const installmentsSql = `INSERT INTO payments 
      (\`quotation_id\`, \`label\`, \`dueWhen\`, \`installmentAmount\`) 
      VALUES ?`;

      db.query(installmentsSql, [installments], (err, result) => {
          if (err) return res.json(err);

          return res.json(result);
      });
  });
});

// ********************* Edit Data ****************
app.put('/edit/:id', (req, res) => {
  const quotationId = req.params.id;

  const {
      name, email, gender, date, designation, domain, entitle,
      description, price, quantity, total, discount, grandTotal, inputCount, installments
  } = req.body;  // Simplified to just update the name

  console.log('Received data for update:', req.body);

  const updateQuotationSql = `
    UPDATE quotation 
    SET name = ?, email = ?, gender = ?, date = ?, designation = ?, domain = ?, entitle = ?, description = ?,
    price = ?, quantity = ?, total = ?, discount = ?, grandTotal = ?, inputCount = ?
    WHERE quotation_id = ?
  `;

  const quotationValues = [
      name, email, gender, date, designation, domain, entitle,
      description, price, quantity, total, discount, grandTotal, inputCount, quotationId
  ];


  db.query(updateQuotationSql, quotationValues, (err, result) => {
      if (err) {
          console.error('Error updating quotation:', err);
          return res.status(500).json({ message: 'Error updating quotation', error: err });
      }

      if (result.affectedRows === 0) {
          return res.status(404).json({ message: 'Quotation not found' });
      }

      const deleteInstallmentsSql = `DELETE FROM payments WHERE quotation_id = ?`;
      db.query(deleteInstallmentsSql, [quotationId], (err, result) => {
          if (err) {
              console.error('Error deleting old installments:', err);
              return res.status(500).json({ message: 'Error deleting old installments', error: err });
          }
          const insertInstallmentsSql = `
          INSERT INTO payments (quotation_id, label, dueWhen, installmentAmount) 
          VALUES ?
      `;

          const installmentsData = installments.map(installment => [
              quotationId,
              installment.label,
              installment.dueWhen,  // Assuming `dueWhen` is correctly formatted
              installment.installmentAmount
          ]);

          db.query(insertInstallmentsSql, [installmentsData], (err, result) => {
              if (err) {
                  console.error('Error inserting installments:', err);
                  return res.status(500).json({ message: 'Error inserting installments', error: err });
              }

              // Both the quotation and the installments were successfully updated/inserted
              return res.json({ message: 'Quotation and installments updated successfully' });
          });
      });
  });
});




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
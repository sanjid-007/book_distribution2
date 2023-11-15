// app.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookdistribution',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database');
  }
});



// ... (existing code)

// Endpoint to get student information by roll number
app.get('/get-student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM student_info WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching student information: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        if (result.length === 0) {
          res.status(404).send('Student not found');
        } else {
          res.status(200).json(result[0]);
        }
      }
    });
  });
  
  // Endpoint to get assigned books by roll number
  app.get('/get-assigned-books-class1/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assigned_class1_books WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });
  

  
  
// Endpoint to insert student information
app.post('/insert-student', (req, res) => {
  const {
    roll_number,
    student_first_name,
    student_last_name,
    class_name,
    fathers_name_mothers_name,
    address,
    phone_number,
    birthdate,
  } = req.body;

  const sql = `INSERT INTO student_info VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [
    roll_number,
    student_first_name,
    student_last_name,
    class_name,
    fathers_name_mothers_name,
    address,
    phone_number,
    birthdate,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting student information: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Student information inserted successfully');
      res.status(200).send('Student information inserted successfully');
    }
  });
});

// Endpoint to assign books to a student in class 1
app.post('/assign-books-class1', (req, res) => {
  const { roll_number, bangla, english, math, given_dates } = req.body;

  const sql = `INSERT INTO assigned_class1_books VALUES (?, ?, ?, ?, ?)`;
  const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error assigning books: ', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Books assigned successfully');
      res.status(200).send('Books assigned successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

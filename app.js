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

// // Endpoint to get student information by roll number
// app.get('/get-student/:roll_number', (req, res) => {
//     const roll_number = req.params.roll_number;
  
//     const sql = `SELECT * FROM student_info WHERE roll_number = ?`;
  
//     db.query(sql, [roll_number], (err, result) => {
//       if (err) {
//         console.error('Error fetching student information: ', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         if (result.length === 0) {
//           res.status(404).send('Student not found');
//         } else {
//           res.status(200).json(result[0]);
//         }
//       }
//     });
//   });


  
// Endpoint to insert student information ot class 1
app.post('/insertClass1StudentInfo', (req, res) => {
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

  const sql = `INSERT INTO class1studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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


// Endpoint to insert student information ot class 2
app.post('/insertClass2StudentInfo', (req, res) => {
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
  
    const sql = `INSERT INTO class2studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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


// Endpoint to insert student information ot class 3
app.post('/insertClass3StudentInfo', (req, res) => {
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
  
    const sql = `INSERT INTO class3studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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
  
  
// Endpoint to insert student information ot class 4
app.post('/insertClass4StudentInfo', (req, res) => {
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
  
    const sql = `INSERT INTO class4studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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



// Endpoint to insert student information ot class 5
app.post('/insertClass5StudentInfo', (req, res) => {
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
  
    const sql = `INSERT INTO class5studentinfo VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
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
  


// Endpoint to get class 1 student information by roll number
app.get('/getClass1StudentInfo/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM class1studentinfo WHERE roll_number = ?`;
  
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
  

  
// Endpoint to get class 2 student information by roll number
app.get('/getClass2StudentInfo/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM class2studentinfo WHERE roll_number = ?`;
  
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

  
// Endpoint to get class 3 student information by roll number
app.get('/getClass3StudentInfo/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM class3studentinfo WHERE roll_number = ?`;
  
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
  
  
// Endpoint to get class 4 student information by roll number
app.get('/getClass4StudentInfo/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM class4studentinfo WHERE roll_number = ?`;
  
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

  
// Endpoint to get class 5 student information by roll number
app.get('/getClass5StudentInfo/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM class5studentinfo WHERE roll_number = ?`;
  
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
  


// Endpoint to get all student information for class 1
app.get('/getClass1StudentInfo', (req, res) => {
    const sql = 'SELECT * FROM class1studentinfo';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving student information for class 1: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Student information for class 1 retrieved successfully');
        res.status(200).json(result);
      }
    });
  });
  
  // Endpoint to get all student information for class 2
  app.get('/getClass2StudentInfo', (req, res) => {
    const sql = 'SELECT * FROM class2studentinfo';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving student information for class 2: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Student information for class 2 retrieved successfully');
        res.status(200).json(result);
      }
    });
  });
  
  // Repeat the pattern for classes 3, 4, and 5
  
  // Endpoint to get all student information for class 3
  app.get('/getClass3StudentInfo', (req, res) => {
    const sql = 'SELECT * FROM class3studentinfo';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving student information for class 3: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Student information for class 3 retrieved successfully');
        res.status(200).json(result);
      }
    });
  });
  
  // Endpoint to get all student information for class 4
  app.get('/getClass4StudentInfo', (req, res) => {
    const sql = 'SELECT * FROM class4studentinfo';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving student information for class 4: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Student information for class 4 retrieved successfully');
        res.status(200).json(result);
      }
    });
  });
  
  // Endpoint to get all student information for class 5
  app.get('/getClass5StudentInfo', (req, res) => {
    const sql = 'SELECT * FROM class5studentinfo';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error retrieving student information for class 5: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Student information for class 5 retrieved successfully');
        res.status(200).json(result);
      }
    });
  });
  








  // Endpoint to assign books to a student in class 1
app.post('/assignBookClass1Student', (req, res) => {
    const { roll_number, bangla, english, math, given_dates } = req.body;
  
    const sql = `INSERT INTO assignedbookclass1student VALUES (?, ?, ?, ?, ?)`;
    const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error assigning books for class 1: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Books assigned successfully for class 1');
        res.status(200).send('Books assigned successfully');
      }
    });
  });
  
  // Endpoint to assign books to a student in class 2
  app.post('/assignBookClass2Student', (req, res) => {
    const { roll_number, bangla, english, math, given_dates } = req.body;
  
    const sql = `INSERT INTO assignedbookclass2student VALUES (?, ?, ?, ?, ?)`;
    const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error assigning books for class 2: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Books assigned successfully for class 2');
        res.status(200).send('Books assigned successfully');
      }
    });
  });
  
  // Endpoint to assign books to a student in class 3
  app.post('/assignBookClass3Student', (req, res) => {
    const { roll_number, bangla, english, math, given_dates } = req.body;
  
    const sql = `INSERT INTO assignedbookclass3student VALUES (?, ?, ?, ?, ?)`;
    const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error assigning books for class 3: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Books assigned successfully for class 3');
        res.status(200).send('Books assigned successfully');
      }
    });
  });
  
  // Endpoint to assign books to a student in class 4
  app.post('/assignBookClass4Student', (req, res) => {
    const { roll_number, bangla, english, math, given_dates } = req.body;
  
    const sql = `INSERT INTO assignedbookclass4student VALUES (?, ?, ?, ?, ?)`;
    const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error assigning books for class 4: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Books assigned successfully for class 4');
        res.status(200).send('Books assigned successfully');
      }
    });
  });
  
  // Endpoint to assign books to a student in class 5
  app.post('/assignBookClass5Student', (req, res) => {
    const { roll_number, bangla, english, math, given_dates } = req.body;
  
    const sql = `INSERT INTO assignedbookclass5student VALUES (?, ?, ?, ?, ?)`;
    const values = [roll_number, bangla, english, math, JSON.stringify(given_dates)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error assigning books for class 5: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        console.log('Books assigned successfully for class 5');
        res.status(200).send('Books assigned successfully');
      }
    });
  });
  

  
  


  
 // Endpoint to get assigned books of a student in class 1 by roll number
app.get('/getAssignedBookClass1Student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assignedbookclass1student WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books for class 1: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });

  
  // Endpoint to get assigned books of a student in class 2 by roll number
  app.get('/getAssignedBookClass2Student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assignedbookclass2student WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books for class 2: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });
  

  
  // Endpoint to get assigned books of a student in class 3 by roll number
  app.get('/getAssignedBookClass3Student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assignedbookclass3student WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books for class 3: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Endpoint to get assigned books of a student in class 4 by roll number
  app.get('/getAssignedBookClass4Student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assignedbookclass4student WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books for class 4: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });
  
  // Endpoint to get assigned books of a student in class 5 by roll number
  app.get('/getAssignedBookClass5Student/:roll_number', (req, res) => {
    const roll_number = req.params.roll_number;
  
    const sql = `SELECT * FROM assignedbookclass5student WHERE roll_number = ?`;
  
    db.query(sql, [roll_number], (err, result) => {
      if (err) {
        console.error('Error fetching assigned books for class 5: ', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(result);
      }
    });
  });
  


 





  




 





  

  
  






app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

function turnEmployeesSQL(newEmployee) {
  let employeesSQL = newEmployee;
  var q = 'INSERT INTO employees SET ?';
  connection.query(q, employeesSQL, (err, result) => {
    console.log(err);
    console.log(result);
    if (!err) {
      console.log("info transpiled into database");
    }
  });
}

//create a employee
router.post('/', (req, res) => {
  const newEmployee = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    birthday: req.body.birthday,
    ssn: req.body.ssn,
    street_address: req.body.address,
    city: req.body.city,
    US_state: req.body.state
  };
  if (!newEmployee.first_name ||
    !newEmployee.last_name ||
    !newEmployee.email ||
    !newEmployee.phone ||
    !newEmployee.birthday ||
    !newEmployee.ssn ||
    !newEmployee.street_address ||
    !newEmployee.city ||
    !newEmployee.US_state
  ) {
    return res.status(400).json({
      msg: 'Please return to the previous page and fill out all the fields.'
    });
  }
  console.log(newEmployee);
  turnEmployeesSQL(newEmployee);
  res.send(`Your entered ${ JSON.stringify(newEmployee) }`);
});

module.exports = router;
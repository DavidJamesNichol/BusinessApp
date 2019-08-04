 const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

const answeredEmployeeQuery = [];

router.post('/', (req, res) => {
  emptyArray(queryDB);


  //step 1
  function emptyArray(callback) {
    new Promise((resolve, reject) => {
      answeredEmployeeQuery.length = 0;
      console.log('1 emptied answeredEmployeeQuery');
      callback(render);
    });
  }
  //step 2
  function queryDB(callback) {
    new Promise((resolve, reject) => {
      var q = 'SELECT * FROM employees ORDER BY city';
      connection.query(q, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!err) {
          console.log("2 info obtained from database");
          answeredEmployeeQuery.push(result);
			console.log(result);
          callback();
        }
      });
    });
  }

  function render() {
    res.render('employeeRoster', {
      title: 'Employee Roster Page',
      query: answeredEmployeeQuery
    });
    console.log('3 info rendered');
  }
	});

module.exports = router;
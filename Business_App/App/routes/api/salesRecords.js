const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

const answeredSaleQuery = [];

router.post('/', (req, res) => {
  begin(emptyArray);

  function begin(callback) {
    callback(queryDB);
  }

  function emptyArray(callback) {
    new Promise((resolve, reject) => {
      answeredSaleQuery.length = 0;
      console.log('1 emptied answeredSaleQuery');
      callback(render);
    });
  }
  
  function queryDB(callback) {
    new Promise((resolve, reject) => {
      var q = 'SELECT * FROM sales';
      connection.query(q, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!err) {
          console.log("2 info obtained from database");
          answeredSaleQuery.push(result);
          callback();
        }
      });
    });
  }

  function render() {
    res.render('salesRecords', {
      title: 'Sales Records Page',
      query: answeredSaleQuery
    });
    console.log('3 info rendered');
  }
});

module.exports.query = answeredSaleQuery;
module.exports = router;
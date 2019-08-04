const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

const answeredInventoryQuery = [];

router.post('/', (req, res) => {
  begin(emptyArray);

  function begin(callback) {
    callback(queryDB);
  }

  function emptyArray(callback) {
    new Promise((resolve, reject) => {
      answeredInventoryQuery.length = 0;
      console.log('1 emptied answeredInventoryQuery');
      callback(render);
    });
  }

  function queryDB(callback) {
    new Promise((resolve, reject) => {
      var q = 'SELECT * FROM inventory';
      connection.query(q, (err, result) => {
        if (err) {
          console.log(err);
        }
        if (!err) {
          console.log("2 info obtained from database");
          answeredInventoryQuery.push(result);
          callback();
        }
      });
    });
  }

  function render() {
    res.render('inventoryStock', {
      title: 'inventory Roster Page',
      query: answeredInventoryQuery
    });
    console.log('3 info rendered');
  }
});

module.exports.query = answeredInventoryQuery;
module.exports = router;
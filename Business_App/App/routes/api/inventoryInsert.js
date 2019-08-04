const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

function turninventorySQL(newinventory) {
  let inventorySQL = newinventory;
  var q = 'INSERT INTO inventory SET ?';
  connection.query(q, inventorySQL, (err, result) => {
    console.log(err);
    console.log(result);
    if (!err) {
      console.log("info transpiled into database");
    }
  });
}

//create a inventory
router.post('/', (req, res) => {
  const newinventory = {
    itemID: req.body.itemID,
    name: req.body.name,
    quantity: req.body.quantity,
    in_production: req.body.in_production
  };
  if (!newinventory.itemID ||
    !newinventory.name ||
    !newinventory.quantity ||
    !newinventory.in_production
  ) {
    return res.status(400).json({
      msg: 'Please return to the previous page and fill out all the fields.'
    });
  }
  console.log(newinventory);
  turninventorySQL(newinventory);
  res.send(`Your entered ${ JSON.stringify(newinventory) }`);
});

module.exports = router;
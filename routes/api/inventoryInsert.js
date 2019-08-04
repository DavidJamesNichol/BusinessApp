const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

function turninventorySQL(newInventory) {
  let inventorySQL = newInventory;
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
  const newInventory = {
    itemID: req.body.itemID,
    name: req.body.name,
    quantity: req.body.quantity
  };
  if (!newInventory.quantity ||
    !newInventory.name 
  ) {
    return res.status(400).json({
      msg: 'Please return to the previous page and fill out all the fields.'
    });
  }
  console.log(newInventory);
  turninventorySQL(newInventory);
  res.send(`Your entered ${ JSON.stringify(newInventory) }`);
});

module.exports = router;
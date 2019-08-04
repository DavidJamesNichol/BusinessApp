const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

function turnsaleSQL(newsale) {
  let saleSQL = newsale;
  var q = 'INSERT INTO sales SET ?';
  connection.query(q, saleSQL, (err, result) => {
    console.log(err);
    console.log(result);
    if (!err) {
      console.log("info transpiled into database");
    }
  });
}

//create a sale
router.post('/', (req, res) => {
  const newsale = {
    saleID: req.body.saleID,
    cust_f_name: req.body.cust_f_name,
    cust_l_name: req.body.cust_l_name,
    phone: req.body.phone,
    email: req.body.email,
    date_of_sale: req.body.date_of_sale,
    store_location: req.body.store_location
  };
  if (!newsale.saleID ||
    !newsale.cust_f_name ||
    !newsale.cust_l_name ||
    !newsale.phone ||
    !newsale.email ||
    !newsale.date_of_sale ||
    !newsale.store_location
  ) {
    return res.status(400).json({
      msg: 'Please return to the previous page and fill out all the fields.'
    });
  }
  console.log(newsale);
  turnsaleSQL(newsale);
  res.send(`Your entered ${ JSON.stringify(newsale) }`);
});

module.exports = router;
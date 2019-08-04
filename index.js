const express = require('express');
const app = express();
const faker = require('faker');
const mysql = require('mysql');
const path = require('path');
const router = express.Router();
const expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));   
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/employeeInsert', require('./routes/api/employeeInsert'));
app.use('/api/employeeRoster/employeeRoster', require('./routes/api/employeeRoster/employeeRoster'));
app.use('/api/employeeRoster/employeeGroupByCity', require('./routes/api/employeeRoster/employeeGroupByCity'));
app.use('/api/inventoryInsert', require('./routes/api/inventoryInsert'));
app.use('/api/inventoryStock/inventoryStock', require('./routes/api/inventoryStock/inventoryStock'));
app.use('/api/inventoryStock/inventoryOrderByQuantity', require('./routes/api/inventoryStock/inventoryOrderByQuantity'));
app.use('/api/salesInsert', require('./routes/api/salesInsert'));
app.use('/api/salesRecords/salesRecords', require('./routes/api/salesRecords/salesRecords'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'business',
  password: ''
});

connection.connect((err) => {
	if(err){
		throw err;
	}
	console.log('MySQL Connected... ');
});

app.get('/', function(req, res) {
	console.log('someone requested /');
	res.render('home', {
		title: 'Home'
	});
});

app.get('/employeeInsert', function(req, res) {
	console.log('someone requested /employeeInsert');
	res.render('employeeInsert', {
		title: 'Employees Insertion Page'
	});
});

app.get('/employeeRoster', function(req, res) {
	console.log('someone requested /employeeRoster');
	res.render('employeeRoster', {
		title: 'Employee Roster Page',
		query: '',
	});
});

app.get('/inventoryInsert', function(req, res) {
	console.log('someone requested /inventoryInsert');
	res.render('inventoryInsert', {
		title: 'Inventory Insertion Page',
		query: '',
	});
});

app.get('/inventoryStock', function(req, res) {
	console.log('someone requested /inventoryStock');
	res.render('inventoryStock', {
		title: 'Inventory Stock Page',
		query: '',
	});
	
});
app.get('/salesInsert', function(req, res) {
	console.log('someone requested /salesInsert');
	res.render('salesInsert', {
		title: 'Sales Insertion Page',
		query: '',
	});
	
});
app.get('/salesRecords', function(req, res) {
	console.log('someone requested /salesRecords');
	res.render('salesRecords', {
		title: 'Sales Records Page',
		query: '',
	});
});
app.get('/customerInsert', function(req, res) {
	console.log('someone requested /customerInsert');
	res.render('customerInsert', {
		title: 'Customer Insert Page',
		query: '',
	});
});


app.listen(3000, function() {
	console.log(`App running on port 3000`);
});

connection.end();
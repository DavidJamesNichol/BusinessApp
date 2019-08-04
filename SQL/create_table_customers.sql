USE business;
CREATE TABLE customers
		(
				custid 		 INT(6) ZEROFILL NOT NULL AUTO_INCREMENT,
				cust_f_name 	 VARCHAR(20),
				cust_l_name 	 VARCHAR(20),
				phone 			 VARCHAR(15),
				email			 VARCHAR(100),
				date_of_sale 	 VARCHAR(10),
				store_location	 VARCHAR(255),
				PRIMARY KEY(custid)
		);
				desc customers;
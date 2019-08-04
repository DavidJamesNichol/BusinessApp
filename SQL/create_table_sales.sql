USE business;
CREATE TABLE sales
             (
                          saleid INT(6) ZEROFILL NOT NULL auto_increment PRIMARY KEY,
                          empid INT,
				 		  custid INT,
				 		  inventory_itemid INT,
				 		  date_of_sale VARCHAR(10),
				 		  sale_value decimal(10,2),
				 		  quantity INT,
                          store_location VARCHAR(255)
             );
             DESC sales;
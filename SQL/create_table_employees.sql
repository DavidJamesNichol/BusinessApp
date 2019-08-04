USE business;
CREATE TABLE employees
             (
                          employeeid         INT(6) ZEROFILL NOT NULL auto_increment,
                          first_name         VARCHAR(20),
                          last_name          VARCHAR(20),
                          email              VARCHAR(100),
                          phone              VARCHAR(15),
                          birthday           VARCHAR(10),
                          ssn                VARCHAR(11),
                          street_address     VARCHAR(255),
                          city               VARCHAR(30),
                          us_state           VARCHAR(2),
				 		  PRIMARY KEY(employeeid)
              );
                          desc employees;
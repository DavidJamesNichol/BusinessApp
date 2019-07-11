USE
DROP TABLE
DROP TABLE  employees;CREATE TABLE employees
             (
                          employeeid         INT NOT NULL auto_increment,
                          first_name         VARCHAR(20),
                          last_name          VARCHAR(20),
                          email              VARCHAR(100),
                          phone              VARCHAR(15),
                          birthday           VARCHAR(10),
                          ssn                VARCHAR(11),
                          street_address     VARCHAR(255),
                          city               VARCHAR(30),
                          us_state           VARCHAR(2),
                          employed_currently BOOLEAN DEFAULT true,
                          desc EMPLOYEES;
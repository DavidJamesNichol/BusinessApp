USE
DROP TABLE
DROP TABLE  sales;CREATE TABLE sales
             (
                          saleid         INT NOT NULL auto_increment,
                          cust_f_name    VARCHAR(20),
                          cust_l_name    VARCHAR(20),
                          phone          VARCHAR(15),
                          email          VARCHAR(100),
                          date_of_sale   VARCHAR(11),
                          store_location VARCHAR(255),
                          PRIMARY KEY (saleid)
             );DESC sales;
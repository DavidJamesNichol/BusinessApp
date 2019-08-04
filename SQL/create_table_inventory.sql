USE business;
CREATE TABLE inventory
             (
                          itemid        INT(6) ZEROFILL NOT NULL auto_increment,
                          name          VARCHAR(255),
                          quantity      INT NOT NULL,
                          PRIMARY KEY (itemid)
             );
             DESC inventory;
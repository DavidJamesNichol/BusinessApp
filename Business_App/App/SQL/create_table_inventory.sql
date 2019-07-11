USE
DROP TABLE
DROP TABLE  inventory;CREATE TABLE inventory
             (
                          itemid        INT NOT NULL auto_increment,
                          name          VARCHAR(255),
                          quantity      INT NOT NULL,
                          in_production BOOLEAN DEFAULT true,
                          PRIMARY KEY (itemid)
             );DESC inventory;
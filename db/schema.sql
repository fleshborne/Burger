DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
GRANT ALL PRIVILEGES ON burgers_db . burgers TO 'root@localhost';
USE burgers_db;


CREATE TABLE burgers (
 id INT AUTO_INCREMENT NOT NULL,
 burger_name VARCHAR(255) NOT NULL,
 devoured boolean,
 createdAt TIMESTAMP NOT NULL default CURRENT_TIMESTAMP,
 PRIMARY KEY(id)
);
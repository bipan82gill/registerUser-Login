DROP DATABASE IF EXISTS x589dfj36f9mdef0;
CREATE DATABASE x589dfj36f9mdef0;

USE x589dfj36f9mdef0;

CREATE TABLE users(
     id int AUTO_INCREMENT NOT NULL,
      username VARCHAR(20),
      fullname VARCHAR(20),
      password VARCHAR(128),
      createdAt TIMESTAP NOT NULL,
      PRIMARY KEY(id));
INSERT INTO users(username, fullname, password)
VALUES('bipangill',"bipanjeet gill", 'japleen1234');

INSERT INTO users(username, fullname, password)
VALUES('gurmilan',"gurlmian gill", 'cartoon54321');

SELECT * FROM users;
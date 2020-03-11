CREATE DATABASE logindb;
USE logindb;
 CREATE TABLE users(
      id int AUTO_INCREMENT,
      username VARCHAR(20),
      fullname VARCHAR(20),
      password VARCHAR(128),
      PRIMARY KEY(id));

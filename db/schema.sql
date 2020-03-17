DROP DATABASE IF EXISTS logindb;
CREATE DATABASE logindb;
USE logindb;
 
CREATE TABLE users(
      id int AUTO_INCREMENT NOT NULL,
      username VARCHAR(20),
      fullname VARCHAR(20),
      password VARCHAR(128),
      createdAt TIMESTAP NOT NULL,
      PRIMARY KEY(id));
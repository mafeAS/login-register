CREATE DATABASE loginRegister;

USE loginRegister;

CREATE TABLE users(
    email VARCHAR (100) NOT NULL PRIMARY KEY,
    name VARCHAR (50) NOT NULL,
    password VARCHAR (60) NOT NULL
);

DESCRIBE users;
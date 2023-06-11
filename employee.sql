CREATE DATABASE IF NOT EXISTS market;

USE market;

CREATE TABLE IF NOT EXISTS employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dni VARCHAR(30) NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth VARCHAR(10) NOT NULL,
    gender VARCHAR(2) NOT NULL,
    nationality VARCHAR(3) NOT NULL,
    position VARCHAR(20),
    telephone VARCHAR(30),
    email VARCHAR(50),
    password VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(20) NOT NULL,
    position VARCHAR(20) NOT NULL
);

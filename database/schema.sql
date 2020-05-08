DROP DATABASE IF EXISTS chooseado;

CREATE DATABASE chooseado;

USE chooseado;

CREATE TABLE stylists(
  id INT PRIMARY KEY AUTO_INCREMENT,
  profile_image TEXT,
  stylist_name VARCHAR(30),
  stylist_description VARCHAR(255),
  specialty1 VARCHAR(10),
  specialty2 VARCHAR(10),
  specialty3 VARCHAR(10),
  specialty4 VARCHAR(10)
);
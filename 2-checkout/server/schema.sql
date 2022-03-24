DROP DATABASE checkout;

CREATE DATABASE checkout;
USE checkout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName text,
  email text,
  userPassword text,
  PRIMARY KEY(id)
);

CREATE TABLE shipping (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  line1 text,
  line2 text,
  userState text,
  zip INT,
  phoneNumber INT,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE billing (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  creditCard INT,
  expirationDate DATE,
  CVV INT,
  billingZip INT,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- mysql -u root < server/schema.sql
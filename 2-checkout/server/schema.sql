DROP DATABASE checkout;

CREATE DATABASE checkout;
USE checkout;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  sessionId text NOT NULL,
  userName text,
  email text,
  userPassword text,
  PRIMARY KEY(id)
);

CREATE TABLE shipping (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT,
  sessionId text NOT NULL,
  line1 text,
  line2 text,
  userState text,
  zip text,
  phoneNumber text,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE billing (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT,
  sessionId text NOT NULL,
  creditCard text,
  expirationDate text,
  CVV text,
  billingZip text,
  PRIMARY KEY(id),
  FOREIGN KEY (userId) REFERENCES users(id)
);

-- mysql -u root < server/schema.sql
require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require("body-parser");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.use(bodyParser.json());

//Create Account
app.post('/createAccount', (req, res) => {
  db.query(
    `INSERT INTO users (userName, sessionId, email, userPassword) VALUES ('${req.body.name}', '${req.session_id}', '${req.body.email}', '${req.body.password}')`,
    function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(results);
      }
    }
  );
});

//Submit Shipping Info
app.post('/shippingInfo', (req, res) => {
  console.log('checking body', req.body)
  db.query(
    `INSERT INTO shipping (sessionId, line1, line2, userState, zip, phoneNumber) VALUES ('${req.session_id}', '${req.body.line1}', '${req.body.line2}', '${req.body.state}', '${req.body.zip}', '${req.body.phone}')`,
    function (err, results) {
      if (err) {
        console.log('here', err)
        res.status(500).send(err);
      } else {
        res.status(201).send(results);
      }
    }
  );
});

//Submit Billing Info
app.post('/billingInfo', (req, res) => {
  db.query(
    `INSERT INTO billing (sessionId, creditCard, expirationDate, CVV, billingZip) VALUES ('${req.session_id}', '${req.body.credit}', '${req.body.expire}', '${req.body.cvv}', '${req.body.billingZip}')`,
    function (err, results) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(results);
      }
    }
  );
});

//get user/shopping info for summary
app.get('/getSummary', (req, res) => {
  db.query(
    `SELECT users.userName, users.email, shipping.line1, shipping.userState, shipping.zip, shipping.phoneNumber FROM users, shipping WHERE users.sessionId='${req.session_id}' AND shipping.sessionId='${req.session_id}'`,
    function (err, results) {
      if (err) {
        console.log(err, 'get not working here');
        res.status(500).send(err);
      } else {
        console.log(results);
        res.sendStatus(200);
      }
    }
  );
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

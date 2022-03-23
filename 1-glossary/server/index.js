require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { findWord } = require("./db");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json())

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/search', (req, res) => {
  // console.log('request', req.query);
  findWord(req.query.term)
    .then(doc => {
      //model.find returns empty arr if no match found
      res.status(200).send(doc);
    })
    .catch(err => {
      console.log(err);
    })
});



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { findWord, findAll, addWord, deleteWord } = require("./db");

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

//retrieve all words
app.get('/api', (req, res) => {
  findAll()
    .then(words => {
      res.status(200).send(words);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

//find a word based on search query
app.get('/search', (req, res) => {
  // console.log('request', req.query);
  findWord(req.query.term)
    .then(doc => {
      //model.find returns empty arr if no match found
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

//add or edit new word
app.post('/changeList', (req, res) => {
  // console.log(req.body);
  addWord(req.body.word, req.body.definition)
    .then(response => {
      return findAll();
    })
    .then(words => {
      res.status(201).send(words);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

//delete word
app.delete('/delete', (req, res) => {
  // console.log('delete', req.body)
  deleteWord(req.body.deleteWord)
    .then(response => {
      res.status(201).send(response);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

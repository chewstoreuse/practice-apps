const mongoose = require("mongoose");
require("dotenv").config();

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// main().catch(err => console.log(err))

// //will wait for the database to connect before executing any other code
// async function main() {
//   await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
//   const definitionSchema = new mongoose.Schema({
//     word: String,
//     definition: String
//   });
// }

mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
  .catch(err => console.log(err));

const definitionSchema = new mongoose.Schema({
  word: String,
  definition: String
});

const Definition = mongoose.model('Definition', definitionSchema);

module.exports = {
  findWord: function (word) {
    return Definition.find({ word: word });
  },

  findAll: function () {
    return Definition.find({});
  },

  addWord: function (word, definition) {
    return Definition.findOneAndUpdate({ word: word }, { definition: definition }, {
      new: true,
      upsert: true
    })
  },

  deleteWord: function (word) {
    return Definition.findOneAndDelete({ word: word });
  }
}
const mongoose = require("mongoose");
require("dotenv").config();

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect(`mongodb://localhost:${process.env.PORT}/${process.env.DB_NAME}`)
  .catch(err => console.log(err));

const definitionSchema = new mongoose.Schema({
  word: String,
  defintioin: String
});

const Definition = mongoose.model('Definition', definitionSchema);

module.exports = {
  findWord: function (word) {
    return Definition.find({ word: word });
  }
}



// Definition.findOneAndUpdate({ word: 'love' }, { definition: 'a feeling' }, (err, response) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('added to database');
//   }
// })
  // .then(response => console.log('added to database'))
  // .catch(err => console.log('err'));
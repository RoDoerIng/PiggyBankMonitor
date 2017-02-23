// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var depositSchema = new Schema({
  username: String,
  amount: { type: Number, required: true},
  numberOfOneEuros: Number,
  numberOfTwoEuros: Number,
  deposited_at: Date,
  newBalance: Number
});

// the schema is useless so far
// we need to create a model using it
var Deposit = mongoose.model('Deposit', depositSchema);

// make this available to our users in our Node applications
module.exports = Deposit;

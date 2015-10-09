var mongoose = require('mongoose');
var meal-schema = mongoose.Schema;

var db = mongoose.connection;

mongoose.connect('mongodb://localhost/test');

var meal = new Schema({
  author: String,
  name: String,
  date: Date,
  description: String,
  category: String,
  recipices: [String],
  ingredients: [String],
  votes: Number
});

var Meal = mongoose.model('Meal', meal);

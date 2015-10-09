var mongoose = require('mongoose');
var user-schema = mongoose.Schema;

var user = new Schema({
  name: {
  firstname: String,
  lastname: String
  }
  email: String,
  password: String,
  description: String,
  age: Number,
  weight: Number,
  date:{ type: Date, default: Date.now },
  allergy: [String],
  religion: String
});

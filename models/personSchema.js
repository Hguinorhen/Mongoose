 //require mongoose
const mongoose = require("mongoose");
//create a person Schema
const Schema = mongoose.Schema();
const personSchema = {
  name: {
    type: String,
    
  },
  age: {
    type: Number,
    
  },
  favouriteFoods: [String],
};

module.exports = Person = mongoose.model("person", personSchema);  
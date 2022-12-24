const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  bloodgroup: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const docs = new mongoose.model("docs", docSchema);

module.exports = docs;

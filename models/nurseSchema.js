const mongoose = require("mongoose");

const nurseSchema = new mongoose.Schema({
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

const nurses = new mongoose.model("nurses", nurseSchema);

module.exports = nurses;

const mongoose = require("mongoose");

const bloodbagSchema = new mongoose.Schema({
  bloodgroup: {
    type: String,
    required: true,
    unique: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const bloodgroups = new mongoose.model("bloodgroups", bloodbagSchema);

module.exports = bloodgroups;

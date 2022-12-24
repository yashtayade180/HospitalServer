const mongoose = require("mongoose");

const bedallotmentSchema = new mongoose.Schema({
  bednum: {
    type: Number,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  allotdate: {
    type: Date,
    required: true,
  },
  dischargedate: {
    type: Date,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const beds = new mongoose.model("beds", bedallotmentSchema);

module.exports = beds;

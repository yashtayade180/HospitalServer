const mongoose = require("mongoose");

const operationSchema = new mongoose.Schema({
  patientname: {
    type: String,
    required: true,
  },
  drname: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const operations = new mongoose.model("operations", operationSchema);

module.exports = operations;

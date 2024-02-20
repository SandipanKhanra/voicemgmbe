const mongoose = require("mongoose");

const preacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please proide a name"],
  },
  centerName: {
    type: String,
    required: [true, "Please provide a center name"],
  },
  mobile: {
    type: String,
    required: true,
  },
  templeConnectedTo: {
    type: String,
    required: true,
  },
});

const Preacher = mongoose.model("Preacher", preacherSchema);
module.exports = Preacher;

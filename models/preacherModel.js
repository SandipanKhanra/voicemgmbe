const mongoose = require("mongoose");

const preacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please proide a name"],
  },
  mobile: {
    type: String,
    required: [true, "Please provide a mobile"],
  },
  templeConnectedTo: {
    type: String,
    required: true,
  },
});

const Preacher = mongoose.model("Preacher", preacherSchema);
module.exports = Preacher;

const mongoose = require("mongoose");
const vinmateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  countryCode: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  counselor: {
    type: String,
    required: true,
  },
  connectedIn: {
    type: Date,
    required: true,
  },
  shiftedIn: {
    type: Date,
    required: true,
  },
  passedOutBatch: {
    type: Date,
    required: true,
  },
  modeOfPreaching: {
    type: String,
    reuired: true,
  },
  placedIn: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, //Exlcude it from schema
  },
});

const Vinmate = mongoose.model("Vinmate", vinmateSchema);
module.exports = Vinmate;

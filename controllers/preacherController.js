const Preacher = require("../models/preacherModel");
const catchAsyncError = require("../utils/catchAsyncError");

exports.getAllPreachers = catchAsyncError(async function (req, res, next) {
  const preachers = await Preacher.find();
  res.status(200).json({
    status: "success",
    results: preachers.length,
    preachers,
  });
});

exports.createPreacher = catchAsyncError(async function (req, res, next) {
  console.log(req.body);

  const preacher = await Preacher.create(req.body);
  res.status(200).json({
    status: "success",
    preacher,
  });
});

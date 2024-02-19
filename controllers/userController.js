const catchAsyncError = require("../utils/catchAsyncError");
const User = require("./../models/userModel");

exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: "success",
    results: users.length,
    data: { users },
  });
});

exports.getUser = catchAsyncError(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.createUser = catchAsyncError(async (req, res, next) => {
  console.log(req.body);
  const user = await User.create(req.body);
  res.status(200).json({
    status: "success",
    user,
  });
});

exports.updateUser = catchAsyncError(async (req, res, next) => {
  const user = await User.updateOne(req.body);
  res.status(200).json({
    status: "success",
    data: { user },
  });
});

exports.deleteUser = catchAsyncError(async (req, res, next) => {
  const user = await User.deleteOne(req.params.id);
  res.status(200).json({
    status: "success",
    data: { user },
  });
});

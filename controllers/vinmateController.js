const Vinmate = require("../models/vinmateModel");
const APIFeatures = require("../utils/apiFeatures");
const AppError = require("../utils/appError");
const catchAsyncError = require("./../utils/catchAsyncError");

exports.getVinmates = catchAsyncError(async (req, res, next) => {
  // const features = new APIFeatures(Vinmate.find(), req.query)
  //   .filter()
  //   .sort()
  //   .limitFields()
  //   .paginate();
  // const vinmates = await features.query;
  const vinmates = await Vinmate.find();
  res.status(200).json({
    status: "success",
    results: vinmates.length,
    data: { vinmates },
  });
});

exports.getVinmate = catchAsyncError(async (req, res, next) => {
  const vinmate = await Vinmate.findById(req.params.id);
  if (!vinmate) {
    return next(new AppError("No data found with the given id.", 400));
  }
  res.status(200).json({
    status: "success",
    data: { vinmate },
  });
});

exports.deleteVinmate = catchAsyncError(async (req, res, next) => {
  await Vinmate.findByIdAndDelete(req.params.id);
  res.status(204).json({ status: "success", data: null });
});

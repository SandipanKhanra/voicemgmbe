const express = require("express");
const preacherController = require("./../controllers/preacherController");
const authController = require("./../controllers/authController");
const router = express.Router();

router
  .route("/")
  .get(authController.protect, preacherController.getAllPreachers)
  .post(authController.protect, preacherController.createPreacher);

module.exports = router;

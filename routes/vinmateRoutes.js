const express = require("express");
const router = express.Router();
const vinmateController = require("../controllers/vinmateController");
const authController = require("../controllers/authController");

// router.param("id", (req, res, next, val) => {
//   console.log(val);
//   next();
// });
router.route("/").get(authController.protect, vinmateController.getVinmates);
router
  .route("/:id")
  .get(vinmateController.getVinmate)
  .delete(
    authController.protect,
    authController.restrictTo("moderator", "super-moderator", "admin"),
    vinmateController.deleteVinmate
  );

module.exports = router;

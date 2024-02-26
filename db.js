const mongoose = require("mongoose");

const connectDB = async function () {
  const mongouri = process.env.DBURL.replace("PASSWORD", process.env.DBPWD);

  try {
    await mongoose.connect(mongouri);
    console.log("DB connection successful!");
  } catch (err) {
    console.error(err.message);
    console.log("Shutting down...");
    process.exit(1);
  }
};

module.exports = { connectDB };

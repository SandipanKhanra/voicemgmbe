const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

const port = process.env.PORT || 8000;
const server = app.listen(port, (req, res) => {
  console.log(`App is running on port ${port}...`);
});

process.on("unhandledRejection", (err) => {
  const message = `${err.name}: ${err.message}`;
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(message);
  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  const message = `${err.name}: ${err.message}`;
  console.log("UNCAUGHT EXCEPTION! Shutting down...");
  console.log(message);
  server.close(() => {
    process.exit(1);
  });
});

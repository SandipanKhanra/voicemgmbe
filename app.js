const express = require("express");
const compression = require("compression");
const cors = require("cors");

const app = express();
const db = require("./db");
const morgan = require("morgan");

const userRouter = require("./routes/userRoutes");
const preacherRouter = require("./routes/preacherRoutes");
const vinmateRouter = require("./routes/vinmateRoutes");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const corsOpts = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOpts));
app.use(morgan("dev"));
db.connectDB();
app.use(express.json());

app.use(compression());
// Routes
app.use("/api/v1/vinmates", vinmateRouter);
app.use("/api/v1/preachers", preacherRouter);
app.use("/api/v1/users", userRouter);

// Handle unimplemented routes

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

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
let corsOptions = {
  origin: ["http://localhost:5173", "https://voice-mgm.onrender.com"],
  methods: ["GET", "POST", "OPTIONS", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  accessControlAllowCredentials: true,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
db.connectDB();
app.use(express.json());

app.use(compression());
app.options('*',cors(corsOptions))
// Routes
app.use("/api/v1/vinmates", vinmateRouter);
app.use("/api/v1/preachers", preacherRouter), cors());
app.use("/api/v1/users", userRouter);

// Handle unimplemented routes

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;

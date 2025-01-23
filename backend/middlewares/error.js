const { ErrorHandler } = require("../utils/errorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Something went wrong";

  if (err.code === 11000) {
    if (err.keyPattern && err.keyPattern.email) {
      const message = "User with email already exist";
      err = new ErrorHandler(message, 400);
    } else if (err.keyPattern && err.keyPattern.title) {
      const message = "Todo already exists";
      err = new ErrorHandler(message, 400);
    } else {
      const message = "Record already exists";
      err = new ErrorHandler(message, 400);
    }
  }

  if (err.name === "CastError") {
    const message = "Record not found";
    err = new ErrorHandler(message, 400);
  }

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

const recordNotFoundError = (next, message = "Record not found") => {
  return next(new ErrorHandler(message, 400));
};

module.exports = {
  errorMiddleware,
  recordNotFoundError,
};

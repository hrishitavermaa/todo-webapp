const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const todoRouter = require("./routes/todo.js");
const userRouter = require("./routes/user.js");
const authRouter = require("./routes/auth.js");
const { errorMiddleware } = require("./middlewares/error.js");

dotenv.config({ path: "./config/config.env" });
require("./config/db");

process.on("uncaughtException", (err) => {
  console.log(`Shutting down the server due to error [${err.message}]`);
  process.exit(1);
});

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/user", userRouter);
app.use("/api/v1/", todoRouter);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server started on port [${port}]`);
});

process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server due to error [${err.message}]`);
  server.close(() => {
    process.exit(1);
  });
});

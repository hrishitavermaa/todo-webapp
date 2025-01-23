const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    console.log(`Connected to database [${res.connection.name}]`);
  })
  .catch((err) => {
    console.log(`Something went wrong [${err.message}]`);
  });
0;

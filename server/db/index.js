const mongoose = require("mongoose");

mongoose
  .connect("------CONF------", {
    useNewUrlParser: true,
  })
  .catch((e) => {
    console.error("Connection Error", e.message);
  });

const db = mongoose.connection;

module.exports = db;

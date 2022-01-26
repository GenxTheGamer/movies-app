const mongoose = require("mongoose");

const Schema = mongoose.schema;

const Movie = new Schema(
  {
    name: { type: String, required: true },
    time: { type: [String], required: true },
    rating: { type: Number, requred: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("movies", Movie);

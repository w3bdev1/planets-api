const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const planetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hoursInDay: {
    type: Number,
    required: true,
  },
  earthDaysAYear: {
    type: Number,
    required: true,
  },
  noOfMoons: {
    type: Number,
    required: true,
  },
  majorMoons: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});

const Planet = mongoose.model("planet", planetSchema);

module.exports = Planet;

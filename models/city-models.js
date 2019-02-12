const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    // Document structure & rules defined here
    city: { type: String },
    flag: { type: String },
    startTime: { type: String },
    geolocation: { type: String }
  },
  {
    // Additional settings for the Scema class defined here
    timestamps: true
  }
);

// "City" model -> "cities" collection
const City = mongoose.model("City", citySchema);

// share the model with other parts of the app
module.exports = City;

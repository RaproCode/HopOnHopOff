const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const citySchema = new Schema(
  {
    // Document structure & rules defined here
    city: { type: String, required: true },
    flag: { type: String, required: true },
    startTime: { type: String, required: true },
    geolocation: { type: Number }
  },
  {
    // Additional settings for the Scema class defined here
    timestamps: true
  }
);

// "City" model -> "cities" collection
const City = mongoose.model("City", busSchema);

// share the model with other parts of the app
module.exports = City;

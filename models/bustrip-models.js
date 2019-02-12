const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const busSchema = new Schema(
  {
    name: { type: String },
    cities: [
      {
        hotel: { type: String },
        image: { type: String },
        visit: { type: String },
        itinerary: { type: String },
        startingCity: { type: String }
      }
    ]
  },
  {
    // Additional settings for the Scema class defined here
    timestamps: true
  }
);

// "BusLine" model -> "buses" collection
const BusLine = mongoose.model("BusLine", busSchema);

// share the model with other parts of the app
module.exports = BusLine;

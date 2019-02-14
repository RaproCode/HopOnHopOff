const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resaSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User" // required: true//
  },
  departureDate: { type: String },
  duration: { type: Number },
  quantity: { type: Number },
  departureCity: { type: String },
  itinerary: [
    {
      hotel: { type: String },
      image: { type: String },
      visit: { type: String },
      itinerary: { type: String },
      geolocation: { type: String },
      startingCity: { type: String },
      cost: { type: Number }
    }
  ],
  price: { type: Number },
  isPayed: { type: String, default: false }
});

const Resa = mongoose.model("Resa", resaSchema);

module.exports = Resa;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const busSchema = new Schema(
  {
    // Document structure & rules defined here
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    lineId: { type: String, enum: ["Blue", "Red"], required: true },
    capacity: { type: Number },
    startDate: { type: Date, required: true },
    hotel: { type: String },
    image: { type: String },
    visit: { type: String }
  },
  {
    // Additional settings for the Scema class defined here
    timestamps: true
  }
);

// "Bus" model -> "buses" collection
const Bus = mongoose.model("Bus", busSchema);

// share the model with other parts of the app
module.exports = Bus;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resaSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  departureDate: { type: String },
  duration: { type: Number },
  quantity: { type: Number },
  departureCity: { type: String },
  cost: { type: String }
});

const Resa = mongoose.model("Resa", resaSchema);

module.exports = Resa;

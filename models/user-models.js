const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // Document structure & rules defined here
    // signUp name
    lastName: { type: String, required: true, minlength: 2 },
    firstName: { type: String, required: true, minlength: 2 },
    // Mr or Ms/Mrs,Miss
    age: { type: Number, min: 18 },
    adress: [
      {
        streetName: { type: String, required: true, minlength: 2 }, // Nedd to add match
        streetNumber: { type: Number, required: true, min: 1, max: 4 },
        zipCode: { type: String, minlength: 5 },
        country: { type: String, match: /^[A-Z][A-Z]$/ }
      }
    ],
    email: { type: String, required: true, unique: true, match: /^.+@.+\..+$/ },
    phoneNumber: { type: Number, min: 10 }, // unique : true
    encryptedPassword: { type: String, required: true, minlength: 6 },
    passwordConfirmation: { type: String },
    booking: [
      {
        duration: { type: String }
      },
      {
        quantity: { type: String }
      },
      {
        departure: { type: String }
      },
      {
        itinerary: { type: String }
      },
      {
        price: { type: Number }
      },
      {
        ispayed: { type: String }
      }
    ],
    role: {
      type: String,
      required: true,
      enum: ["normal", "admin"],
      default: "normal"
    }
  },
  {
    // Additional settings for the Scema class defined here
    timestamps: true
  }
);

// "User" model -> "users" collection
const User = mongoose.model("User", userSchema);

module.exports = User;

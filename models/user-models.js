const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true },
  userSurname: { type: String, required: true },
  age: { type: Number, min: 18 },
  adress: {
    type: String //??
  },
  userContry: { type: String, match: /^[A-Z][A-Z]$/ },
  email: { type: String, required: true },
  phoneNumber: { type: String },
  //ObjectId IS NOT a built-in Javascript class like String, Number, ect.
  // MONGOOSE gives us the class throudh Schema.type
  userId: [Schema.Types.ObjectId],
  userPwd: { type: String, min: 6 }
});

const User = mongoose.model("User", userSchema);

// Sharing the User variable with other files that requiere user-model.js
//("User is Mongoose model that connects to the "User" collection)
module.exports = User;

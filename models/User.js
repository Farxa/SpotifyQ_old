const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  password: String,
  role: {
    type: String,
    enum: ['user', 'host'],
    default: 'user'
  }
});

const User = model("User", userSchema);

module.exports = User;

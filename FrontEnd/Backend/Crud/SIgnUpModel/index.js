const mongoose = require("mongoose");
const SignupSchema = new mongoose.Schema({
  Username: {
    type: String,
  },
//   email: {
//     type: String,
//   },
//   password: {
//     type: String,
//   },
});
const Signup = mongoose.model("Signup", SignupSchema);
module.exports = Signup;

const express = require("express");
const Signup = express.Router();
const User = require("../SIgnUpModel");

Signup.route("/add").post(function (req, res) {
    try {
        let cruds = new User(req.body); 
         cruds
          .save()
          .then((user) => {
            res.status(200).send({ cruds: "added successfully" });
          })
          .catch((err) => {
            res.status(400).send("adding new failed");
          });
      }
     // if (req.body.username 
    //      && req.body.email && req.body.password) {
    //   User.find({ username: req.body.username }, (err, data) => {
    //     if (data.length == 0) {
    //       let User = new User({
    //         username: req.body.username,
    //         email: req.body.email,
    //         password: req.body.password,
    //       });
    //       User.save((err, data) => {
    //         if (err) {
    //           res.status(400).json({
    //             errorMessage: err,
    //             status: false,
    //           });
    //         } else {
    //           res.status(200).json({
    //             status: true,
    //             title: "Registered Successfully.",
    //           });
    //         }
    //       });
    //     } else {
    //       res.status(400).json({
    //         errorMessage: `UserName ${req.body.username} Already Exist!`,
    //         status: false,
    //       });
    //     }
    //   });
    // } else {
    //   res.status(400).json({
    //     errorMessage: "Add proper parameter first!",
    //     status: false,
    //   });
    // }
  catch (e) {
    res.status(400).json({
      errorMessage: "Something went wrong!",
      status: false,
    });
  }
});
module.exports = Signup;
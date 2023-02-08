const express = require("express");
const crudroutes = express.Router();
let crud = require("../CrudMOdel");

crudroutes.route("/").get(function (req, res) {
  crud.find(function (err, User) {
    if (err) {
      console.log(err);
    } else {
      res.json(User);
    }
  });
});
crudroutes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  crud.findById(id, function (err, User) {
    if (err) {
      console.log(err);
    } else {
      console.log(User);
    }
  });
});

crudroutes.route("/add").post(function (req, res) {
  let cruds = new crud(req.body);
  cruds
    .save()
    .then((user) => {
      res.status(200).send({ cruds: "added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new   failed");
    });
});

crudroutes.route("/update/:id").post(function (req, res) {
  crud.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(404).send("Data is not Found");
    }
    (todo.name = req.body.name),
      (todo.lucky_number = req.body.lucky_number),
      todo
        .save()
        .then((todo) => {
          res.json("Todo updated!");
        })
        .catch((err) => {
          res.status(400).send("Update not possible");
        });
  });
});

module.exports = crudroutes;

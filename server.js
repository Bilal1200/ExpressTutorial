const express = require("express");
const app = express();
const PORT = 3000;
const userModel = require("./model");
const mongoose = require("mongoose");

app.use(express.json());
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// post api to send data to server

app.post("/add_user", async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get ("/add_user" , async (req, res) => {
    const user = await userModel.find({});
    try{
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
    }
    
    )

app.post("/checkpost", (req, res) => {
  const { name } = req.body;
  res.send(`Wellcome ${name}`);
});
// const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'image.jpg')))
// get data at root level

app.get("/", (req, res) => {
  res.status(200);
  res.send("Wellcome to rool level of server");
});

// getting data on diffrent route

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("Hello, world!");
});

app.listen(PORT, (error) => {
  if (!error)
    console.log("server is successfully listening and app is on port " + PORT);
  else console.log("error accoured , server  can't start ", error);
});


module.exports = app;

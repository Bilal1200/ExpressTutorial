const mongoose = require("mongoose");
const CrudSchema = new mongoose.Schema({
name: {
type: String,
required: true,
},
lucky_number: {
type: Number,
 },
});
const crud = mongoose.model("crud", CrudSchema);
module.exports = crud;
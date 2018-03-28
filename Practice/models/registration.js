var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    number: Number
});
var myModal = mongoose.model("User", UserSchema);
module.exports = myModal;
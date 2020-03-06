const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    emailAddress: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: { type: String, required: true }
});

module.exports = mongoose.model("User", userSchema, "users");

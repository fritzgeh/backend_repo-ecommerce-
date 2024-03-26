const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: String,
    Title: String,
    age: Number,
    date: String
})

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel
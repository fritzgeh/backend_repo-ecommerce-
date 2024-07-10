const mongoose = require("mongoose")
const dotenv = require("dotenv")

const ProductSchema = new mongoose.Schema({
    name: {type:String, required: true},
    description: String,
    price: {type: Number, required: true},
    stock: {type: Number, required: true},
    category: String
})

module.exports = mongoose.model("Product", ProductSchema)
const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema ({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true},
    products: [ {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", require: true},
        qauntity: { type: Number, require: true},
    }
    ],
    totalAmount: { type: Number, require: true},
    status: { type: String, default: "pending"},
    createdAt: { type: Date, default: Date.now}
})

module.exports = mongoose.model("Order", orderSchema)
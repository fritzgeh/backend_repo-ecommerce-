const Order = require ("../models/order")

exports.createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body
    const order = new Order ({user: userId, products, totalAmount})
    await order.save()
    res.json(order)
}

exports.getOrders = async (req, res) => {
    const orders = await Order.find().populate("user").populate("products.product")
    res.json(orders)
}
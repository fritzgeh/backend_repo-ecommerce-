const product = require("../models/product")
const Product = require("../models/product")

exports.getProducts = async (req,res) => {
    const products = await Product.find()
    res.json(product)
}

exports.creatProduct = async (req,res) => {
    const product = new Product (req.body)
    await product.save()
    res.json(product)
}

exports.updateProduct = async (req, res) => {
    const product = await product.findByIdAndUpdate (req.params.id, req.body,{new:true})
    res.json(product)
} 

exports.deleteProduct = async (req,res) => {
    const Product = await product.findIdAndDelete (req.params.id)
    res.json({message:"Product deleted"})
}
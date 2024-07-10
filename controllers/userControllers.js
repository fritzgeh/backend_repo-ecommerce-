const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.registerUser = async (req,res) => {
    const { name, email, password } = req.body
    const harshedPassword = await bcrypt.hash(password, 10)
    const user = new User ({name, email, password:harshedPassword})
    await user.save()
    res.json(user)
}

exports.loginUser = async (req,res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({message: "Invalid credentails"})
    }
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, { expiresIn: "1h"})
    res.json({token})
}
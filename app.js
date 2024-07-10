const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const connectDB = require("./db")
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
const orderRoutes = require("./routes/orderRoutes")
const auth = require("./middleware/auth")
const mongoose = require("mongoose")

dotenv.config()
connectDB()

const cors = require("cors")
const app = express ()
app.use(bodyParser.json())

app.use(cors())
app.use(express.json())
app.use("/api/product", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.get("./api/data", (req, res) => {
    res.json({message: "Hello from the server!"})
})

app.post("/api/data", (req,res) => {
    const data = req.body
    res.json({message: `Received data: ${data}`})
})

const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => 
    console.log (`server running on PORT ${PORT}`)
)
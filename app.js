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

const app = express ()
app.use(bodyParser.json())

app.use("/api/product", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log ("connected to mongodb"))
.catch(error => 
    console.error("error found", error)
)

const server = app.listen(PORT, () => 
    console.log (`server running on PORT ${PORT}`)
)
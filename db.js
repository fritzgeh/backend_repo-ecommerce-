const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongo_connect, {
        })
        console.log("MongoDb Connected")
    } catch (error) {
        console.error("MongoDB Connectin Fail",error)
        process.exit(1)
    }
}
module.exports = connectDB
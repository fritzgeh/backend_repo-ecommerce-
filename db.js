const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URL, {
            useNewParser: true,
            useUndefineTopology: true
        })
        console.log("MongoDb Connected")
    } catch (error) {
        console.error("MongoDB Connectin fail",error)
        process.exit(1)
    }
}
module.exports = connectDB
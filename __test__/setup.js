const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

beforeAll (async () => {
    await mongoose.connect("process.env.Mongo_connect", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
})

aferAll(async () => {
    await mongoose.connection.close()
})
const mongoose = require("mongoose")
const express = require("express")
const router = require("./api.js")
const bodyParser = require("body-parser")

const app = express()

mongoose.connect("mongodb://127.0.0.1/my_database")

mongoose.Promise = global.promise

app.use(bodyParser.json())
app.use("/api", router)

app.listen(3030, () =>{
    console.log("server is running at port 3030")
})
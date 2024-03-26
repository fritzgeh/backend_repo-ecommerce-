const express = require("express")

const router = express.Router()
const UserModel = require("./schema.js")

router.get("/users",(req, res) => {
    res.send(users)
})

router.post("/users",(req, res) => {
    UserModel.create(req.body).then((user) =>{
        res.send(user)
    })
})

router.put("/users/:id",(req, res) => {
    UserModel.findByIdAndUpdate({_id:req.params.id}, req.body,{new: true}).then((user) =>{
        res.send(user)
    })
})

router.delete("/users/:id",(req, res) => {
    UserModel.findByIdAndDelete({_id:req.params.id}).then((user) =>{
        res.send(user)
    })
})

module.exports = router
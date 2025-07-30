const router = require("express").Router()
const Event = require("../models/Event")

router.get("/creat",(req,res)=>{
    res.render("/event/ecreat.ejs")
})



















module.exports = router
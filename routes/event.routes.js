const router = require("express").Router()
const Event = require("../models/Event")
const Comment = require("../models/comment") 

router.get("/create",(req,res)=>{
    res.render("event/ecreat")
})
router.post("/create",async (req,res)=>{
    try{
        await Event.create(req.body)
        res.redirect("/event/events")
    }
    catch(error){
        console.log(error)
    }
})
router.get("/events",async (req,res)=>{
    try{
    const allEvents = await Event.find().populate("comments").lean()
    res.render("event/events",{allEvents: allEvents})

    }
    catch(error){
        console.log(error)
    }
})

router.delete("/events/:id", async (req,res)=>{
    try {
        const deletedEvent = await Event.findByIdAndDelete(req.params.id)
        res.redirect('/event/events')
        console.log("item deleted successfully")
    } catch (error) {
        console.log(error)
    }
})
router.get("/edit/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    res.render("event/eedit", { event:event })
  } catch (error) {
    console.log(error)
  }
})

router.put("/edit/:id", async (req, res) => {
  try {
    await Event.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/event/events")
  } catch (error) {
    console.log(error)
  }
})
router.get("/show/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate("comments").lean()
    res.render("event/show", { event:event })
  } catch (error) {
    console.log(error)
  }
})



















module.exports = router
const router = require("express").Router()
const comment = require("../models/comment")
const Event = require("../models/Event")


router.post("/create/:id",async (req,res)=>{
    try{
        const createdComment = await comment.create(req.body)
        const event = await Event.findById(req.params.id)
        event.comments.push(createdComment._id)
        await event.save()

        res.redirect("/event/events")
    }
    catch(error){
        console.log(error)
    }
})
router.get("/create/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
    res.render("comment/create", { event:event })
  } catch (error) {
    console.log(error)
  }
})










module.exports = router
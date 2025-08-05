const mongoose = require("mongoose")

const commentSchema= new mongoose.Schema({
comment:{
    type:String,
    require:true
},
image:{
        type:String
    },
user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User" 
    },
  event: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Event" 
}
})

const comment = mongoose.model("Comment",commentSchema)

module.exports = comment
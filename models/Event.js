const mongoose = require("mongoose")

const eventSchema= new mongoose.Schema({
    event:{
        type:String,
        required:[true,"you have to write the event"],
    },
    date:{
        type:Date
    },
    location:{
        type:String
    },
    description:{
        type:String,
        required:[true,"write about your event"]
    },
    image:{
        type:String
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment"
    }]
})
const Event = mongoose.model("Event",eventSchema)

module.exports = Event
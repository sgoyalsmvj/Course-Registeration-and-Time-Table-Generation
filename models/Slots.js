const mongoose = require('mongoose')


const slotsSchema = new mongoose.Schema({
    sem: {
        type: Number,
        required: true,
    },
    date: {
        required: true,
        type:Date
    },
    batch: {
        required: Number,
        type:String
    },
    branch: {
        required: String,
        type:String
    }
    

})

const Slots = mongoose.model('Slots',slotsSchema);

module.exports= Slots;

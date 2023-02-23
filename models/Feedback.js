const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
    from:{
        type:String,
        required:true,
    },
    to:{
        type:String,
        required:true
    },
    rate:Number,
    comment:String
})
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;




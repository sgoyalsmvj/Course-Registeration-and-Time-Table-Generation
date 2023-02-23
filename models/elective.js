const mongoose = require('mongoose')

const electiveSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    courseid:{
        type:String,
        required:true
    },
    credits:Number,
    groupno:Number,
    branch:Number,
    seats:Number,
    semester:Number
})
const Elective = mongoose.model('Elective', electiveSchema);

module.exports = Elective;




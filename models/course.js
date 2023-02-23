const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    elective:Boolean,
    courseid:{
        type:String,
        required:true
    },
    credits:Number
})
const Course = mongoose.model('Course', courseSchema);

module.exports = {Course};

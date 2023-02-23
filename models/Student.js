const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    branch: {
        type: Number,
        required: true,
    },
    rollno: {
        type: String,
        required: true,
        maxlength: 10,
    },
    sem: {
        type: Number,
        required: true,
        maxlength: 10,
    },
    img: {
        type: String,
        required: true,
    },
    courseRegistered:{
        type:Array
    },
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    backlog:{
        type:[String],
    }
})

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

const student1 = new Student({ 
    name: 'Sunny Saxena',
    rollno: '20ucs205',
    courseRegistered:{
        core:['SWE','AI','CS','IDS','AP'],
        electives:['PAVFM','MULTISYS'],
    },
    year:2020,
    username: '20ucs205',
    password: '20ucs205',
})


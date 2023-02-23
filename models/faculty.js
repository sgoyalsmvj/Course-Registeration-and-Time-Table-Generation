const mongoose = require('mongoose')


const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    coursesTeaching: [String],
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    img:{
        required: true,
        type: String
    }
})

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;


// const faculty1 = new Faculty({
//     name:'Vikas Bajpai',
//     facultyId:101,
//     coursesTeaching:['SWE','ISD'],
//     username:'vikasbajpai101',
//     password:'mymaalanukriti',
// })
// faculty1.save();
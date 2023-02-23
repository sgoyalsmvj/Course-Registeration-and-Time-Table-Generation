const mongoose = require('mongoose')


const preferenceSchema = new mongoose.Schema({
    order: {
        type: Array,
        required: true,
    },
    student: {
        type: String,
        required: true,
    },
    sem: {
        type: Number,
        required: true,
    },
    slot :{
        type: String,
        required:true
    }
})

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = Preference;



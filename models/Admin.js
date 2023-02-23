const mongoose = require('mongoose')


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        required: true,
        type:String
    },
    password: {
        required: true,
        type:String
    }
})

const Admin = mongoose.model('Admin',adminSchema);

module.exports= Admin;

// const administration = new Admin({name:'admin',username:'admin',password:'admin@123'})
// administration.save();


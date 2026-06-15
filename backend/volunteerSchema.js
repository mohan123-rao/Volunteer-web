const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true
    },
    email:{
        type: String,
        trim: true
    },
    phoneNumber: {
        type: Number,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    age: {
        type: String,
        trim: true
    },
    address: { 
        type: String,
        trim: true
    },
    skills: {
        type: String,
        trim: true
    },
    areaOfInterest: {
        type: String,
        trim: true
    },
    availability: {
        type: String,
        trim:true
    },
    prefferredLocation:{
        type:String,
        trim:true
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
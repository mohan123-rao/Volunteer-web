const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    resName: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    Distict: { // assuming you meant 'District'
        type: String,
        trim: true
    },
    City: {
        type: String,
        trim: true
    },
    phoneNumber: {
        type: String,
        trim: true
    },
    estimatedDeliveryTime: {
        type: Number, // in minutes
        min: 0
    }
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
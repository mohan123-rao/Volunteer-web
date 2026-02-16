const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
    
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
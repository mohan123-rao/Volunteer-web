const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        trim: true
    },
    restaurantId: { 
        type: mongoose.Schema.Types.ObjectId,
         ref: 'Restaurant',
          required: true
         }

}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Signup", required: true },
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant", required: true },
  items: [
    {
      item: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },

  //Delivery Address
  address: {
    city: { type: String, required: true },
    area: { type: String, required: true },
    nearby: { type: String, required: true },
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);

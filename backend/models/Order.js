const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  address: {
    name: String,
    phone: String,
    street: String,
    city: String,
    pincode: String,
  },
  cart: Array, // or [Object] to store purchased items
  paymentId: String,
  orderId: String,
  signature: String,
  amount: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);

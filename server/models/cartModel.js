const mongoose = require('mongoose');
const mobileUser = require('./mobileUserModel');
const product = require('./productModel');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: mobileUser, required: true },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: product, required: true },
      quantity: { type: Number, default: 1 }, // Default quantity is 1
    }
  ],
  totalPrice: { type: Number, default: 0 },
});

module.exports = mongoose.model('Cart', cartSchema);

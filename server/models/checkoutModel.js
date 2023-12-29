const mongoose = require('mongoose');
const mobileUser = require('./mobileUserModel');
const checkoutSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: mobileUser, 
    required: true 
  },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  division: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true }
});

module.exports = mongoose.model('Checkout', checkoutSchema);
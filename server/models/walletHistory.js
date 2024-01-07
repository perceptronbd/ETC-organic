const mongoose = require('mongoose');
const mobileUser = require('./mobileUserModel');

const orderModel = require('./orderModel')


const walletHistory = new mongoose.Schema({
    recieverId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: mobileUser, 
      required: true 
    },
    purchaserId:{
      type: mongoose.Schema.Types.ObjectId, 
      ref: mobileUser, 
      required: true
    },
    date: { 
      type: String
    },
    time: {
        type: String,
        required: true,
      },
      csb: {
        type: Number,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
});
  
module.exports = mongoose.model('wallterHistory', walletHistory);
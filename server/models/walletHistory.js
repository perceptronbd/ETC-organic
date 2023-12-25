const mongoose = require('mongoose');
const mobileUser = require('./mobileUserModel');

const orderModel = require('./orderModel')


const walletHistory = new mongoose.Schema({
    recievedId: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: mobileUser, 
      required: true 
    },
    orderID: { 
      type: mongoose.Schema.Types.ObjectId, 
      ref: orderModel, 
      required: true 
    },
    date: { 
      type: Date 
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
const mongoose = require('mongoose');

const User = require("../models/mobileUserModel")

const Bank = require("../models/bankModel")

const withdrawSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, // Replace 'User' with the actual model name for your user
        required: true
    },
    bankId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Bank, // Replace 'Bank' with the actual model name for your bank
        
    },
    withdrawAmount: {
        type: Number,
        required: true
    },
    paymentType: {
        type: String,
        enum: ['bkash', 'nagad', 'bank'],
        required: true
    },
    phoneNumber: {
        type: String,
        
    },
    status: {
        type: String,
        enum: ['pending', 'complete'],
        default: 'pending'
    }
});

module.exports = mongoose.model('Withdraw', withdrawSchema);

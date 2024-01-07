// models/branchModel.js
const mongoose = require("mongoose");

const Product = require("../models/productModel")

const User = require("../models/mobileUserModel")

const bankSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, 
        required: true
    },
    bankName: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true
    }
    
});

const Bank = mongoose.model("Bank", bankSchema);

module.exports = Bank;
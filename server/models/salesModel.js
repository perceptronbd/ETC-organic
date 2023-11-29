const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('../models/productModel');
const Branch = require('../models/branchModel');


const salesSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerNumber: {
        type: Number,
        required: true
    },
    customerId: {
        type: Number,
        },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Branch,
        required: true
    },
    discount: {
        type: Number,
        min: 0
    },
    finalPrice: {
        type: Number,
        min: 0
    },
});

module.exports = mongoose.model('salesModel', salesSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = require('../models/productModel');
const Branch = require('../models/branchModel');


const PurchaseSchema = new Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required: true
    },
    supplierName: {
        type: String,
        required: true
    },
    supplierNumber: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    },
    totalPurchasingPrice: {
        type: Number,
        required: true,
        min: 0
    },
    branch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Branch,
        required: true
    },
    transportationCost: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('ProductPurchase', PurchaseSchema);
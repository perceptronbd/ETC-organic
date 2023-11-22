const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductPurchaseSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    supplierName: {
        type: String,
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
        type: String,
        required: true
    },
    transportationCost: {
        type: Number,
        required: true,
        min: 0
    }
});

module.exports = mongoose.model('ProductPurchase', ProductPurchaseSchema);
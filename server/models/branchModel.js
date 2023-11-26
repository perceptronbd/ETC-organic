// models/branchModel.js
const mongoose = require("mongoose");

const Product = require("../models/productModel")

const Leora = ""

const branchSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stock: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: Product, // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                default: 0, // Default quantity is 0
            },
        },
    ],
});

const Branch = mongoose.model("Branch", branchSchema);

module.exports = Branch;

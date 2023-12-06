const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Product = require("../../models/productModel");
const Branch = require("../../models/branchModel");
const Sales = require("../../models/salesModel")
const MobileUser = require('../../models/mobileUserModel')

const updateUserCSB = asyncHandler(async (productId, customerId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    const productCSB = product.csb;
    const primaryCSBIncrement = 0.4 * productCSB;

    await MobileUser.findByIdAndUpdate(customerId, {
        $inc: { CSB: primaryCSBIncrement }
    });

    let remainingCSB = 1-0.4;
    const distributionPercentages = [0.25, 0.10, 0.05, 0.03, 0.02, 0.01];
    let currentUserId = customerId;


    for (let i = 0; i < distributionPercentages.length; i++) {
        const currentUser = await MobileUser.findById(currentUserId);
        console.log(currentUser.referredBy);
        if (currentUser.referredBy.equals(new ObjectId('6570b8a8b40bb675bcffd527'))) {
            break;
        }

        const increment = distributionPercentages[i] * productCSB;
        remainingCSB -= distributionPercentages[i];

        await MobileUser.findByIdAndUpdate(currentUser.referredBy, {
            $inc: { CSB: increment }
        });

        currentUserId = currentUser.referredBy;
    }

    if (remainingCSB > 0) {
        const motherAccountId = '6570b8a8b40bb675bcffd527';
        await MobileUser.findByIdAndUpdate(motherAccountId, {
            $inc: { CSB: productCSB*remainingCSB }
        });
    }
});

const addSale = asyncHandler(async (req, res) => {
    try {
        // Get sale details from the request body
        const { product, customerName, customerNumber, customerId, quantity, price, branch, discount, finalPrice } = req.body;

        updateUserCSB(product,customerId)
        // Create a new sale record
        const newSale = new Sales({
            product,
            customerName,
            customerNumber,
            customerId,
            quantity,
            price,
            branch,
            discount,
            finalPrice,
        });

        // Save the sale record to the database
        await newSale.save();

        // Update stock in the branch for the sold product
        const branchData = await Branch.findById(branch);

        const stock = branchData.stock;

        if (!stock) {
            // Handle if the stock array is not found in the branch data
            console.error(`Stock array not found in branch ${branch}.`);
            return res.status(404).json({
                code: 404,
                message: `No stock found for branch`,
            });
        }

        const productIndex = stock.findIndex((product) => product.product.equals(newSale.product));

        if (productIndex === -1) {
            // If the product is not found in the stock, handle the error
            console.error(`Product with name ${newSale.product} not found in branch ${branch} stock.`);
            return res.status(404).json({
                code: 404,
                message: `Product not found in branch stock`,
            });
        }

        // If the product is in stock, decrement the quantity
        if (stock[productIndex].quantity >= quantity) {
            stock[productIndex].quantity -= quantity;
        } else {
            // Handle if the requested quantity is greater than the available stock
            console.error(`Insufficient stock for product ${newSale.product} in branch ${branch}.`);
            return res.status(400).json({
                code: 400,
                message: `Insufficient stock for product in branch`,
            });
        }

        // Save the updated branch data
        const updatedBranch = await Branch.findByIdAndUpdate(
            branch,
            { stock },
            { new: true }
        );

        console.log(updatedBranch);

        // Send a success response
        res.status(201).json({
            code: 201,
            sale: newSale ,
            message: "Sale added successfully",
        });
    } catch (error) {
        console.error("Error adding sale:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = {addSale, updateUserCSB};
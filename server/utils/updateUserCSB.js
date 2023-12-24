const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const Product = require("../models/productModel");
const MobileUser = require('../models/mobileUserModel')

const updateUserCSB = asyncHandler(async (productId, customerId, quantity) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    const productCSB = product.csb;
    const primaryCSBIncrement = 0.4 * productCSB * quantity;

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

        const increment = distributionPercentages[i] * productCSB * quantity;
        remainingCSB -= distributionPercentages[i];

        await MobileUser.findByIdAndUpdate(currentUser.referredBy, {
            $inc: { CSB: increment }
        });

        currentUserId = currentUser.referredBy;
    }

    if (remainingCSB > 0) {
        const motherAccountId = '6570b8a8b40bb675bcffd527';
        await MobileUser.findByIdAndUpdate(motherAccountId, {
            $inc: { CSB: productCSB*remainingCSB*quantity }
        });
    }
});

module.exports = updateUserCSB;

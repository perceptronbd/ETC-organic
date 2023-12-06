const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const Product = require("../../models/productModel");
const Branch = require("../../models/branchModel");

const Sales = require("../../models/salesModel")

const MobileUser = require('../../models/mobileUserModel')

exports.updateUserCSB = asyncHandler(async (req, res) => {
    const { productId, customerId } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    const productCSB = product.csb;
    const primaryCSBIncrement = 0.4 * productCSB;

    // Update CSB of the purchasing user
    await MobileUser.findByIdAndUpdate(customerId, {
        $inc: { CSB: primaryCSBIncrement }
    });

    // Initialize remaining CSB for distribution in the referral hierarchy
    let remainingCSB = 1-0.4;
    const distributionPercentages = [0.25, 0.10, 0.05, 0.03, 0.02, 0.01];
    let currentUserId = customerId;

    // Loop through the referral hierarchy
    for (let i = 0; i < distributionPercentages.length; i++) {
        const currentUser = await MobileUser.findById(currentUserId);
        console.log(currentUser.referredBy);
        if (currentUser.referredBy.equals(new ObjectId('6570b8a8b40bb675bcffd527'))) {
            break;
        }

        const increment = distributionPercentages[i] * productCSB;
        remainingCSB -= distributionPercentages[i];

        // Update CSB for the referrer
        await MobileUser.findByIdAndUpdate(currentUser.referredBy, {
            $inc: { CSB: increment }
        });

        currentUserId = currentUser.referredBy;
    }

    // If there's remaining CSB after the distribution, allocate it to the mother account
    if (remainingCSB > 0) {
        const motherAccountId = '6570b8a8b40bb675bcffd527';
        await MobileUser.findByIdAndUpdate(motherAccountId, {
            $inc: { CSB: productCSB*remainingCSB }
        });
    }
    // Sending success response
    res.status(200).json({
        message: "CSB updated successfully"
    });
});

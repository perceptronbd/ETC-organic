const mongoose = require('mongoose');

const mobileUserSchema = new mongoose.Schema({
    mobileNumber: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    referralCode: { type: String, unique: true },
    referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'MobileUser' },
    CSB: {type: Number},
    totalCSB: {type: Number},
    Points: {type: Number},
    taka: {type:Number}
});

module.exports = mongoose.model('MobileUser', mobileUserSchema);
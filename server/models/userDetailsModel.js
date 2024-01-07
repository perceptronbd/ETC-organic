const mongoose = require('mongoose');
const mobileUserModel = require('./mobileUserModel');

const userDetailsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: mobileUserModel
    },
    image: {
        type: String, // URL to the image
        required: false
    },
    nationalIdImage: {
        type: String, // URL to the national ID image
        required: false
    },
    district: {
        type: String,
        required: false
    },
    thana: {
        type: String,
        required: false
    }
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = UserDetails;
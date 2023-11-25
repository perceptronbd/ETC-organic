const User = require('../../models/mobileUserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler(async (req, res) => {
    try {
        const { mobileNumber, password, name, givenCode } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ mobileNumber });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Generate a random referral code
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const codeLength = 6; 
        let referralCode;
        let codeExists = true;

        while (codeExists) {
            referralCode = '';
            for (let i = 0; i < codeLength; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                referralCode += characters[randomIndex];
            }

            // Check if the generated code exists in the database
            const existingReferralUser = await User.findOne({ referralCode });
            if (!existingReferralUser) {
                codeExists = false;
            }
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const referrer = await User.findOne({ referralCode: { $regex: givenCode } });
        

        const user = new User({
            mobileNumber,
            password: hashedPassword,
            name,
            referralCode,
            referredBy: referrer._id,
        });

        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(201).json({ token });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

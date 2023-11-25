const User = require('../../models/mobileUserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require("express-async-handler");

exports.register = asyncHandler(async (req, res) => {
    const { mobileNumber, password, name, givenCode } = req.body;


    if (!name || !givenCode || !password || !mobileNumber) {
        res.status(400);
        throw new Error("Please fill in all required fields");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ mobileNumber });
    if (existingUser) {
        res.status(400);
        throw new Error('User with this phone number already exists');
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

    const referrer = await User.findOne({ referralCode: givenCode })
    if(!referrer){
        res.status(400);
        throw new Error('Invalid Referral Code');
    }
    // Create new user
    const user = new User({
        mobileNumber,
        password: hashedPassword,
        name,
        referralCode,
        referredBy: referrer._id
    });

    await user.save();

    // Generate Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    // Send HTTP-only cookie
    res.cookie("token", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400), // 1 day
        sameSite: "none",
        secure: true,
    });

    res.status(201).json({
        data: {
            _id: user._id,
            name,
            mobileNumber,
            token,
            referralCode: user.referralCode,
            referredBy: user.referredBy
        },
        message: "User registered successfully"
    });
});



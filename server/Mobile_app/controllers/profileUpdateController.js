const asyncHandler = require('express-async-handler');
const UserDetails = require('../../models/userDetailsModel'); 

exports.updateProfile = asyncHandler(async (req, res) => {
    const userId = req.user._id; // Ensure this correctly fetches the user ID
    const { district, thana } = req.body;

    // Initialize variables for image paths
    let image, nationalIdImage;

    // Check if the files were uploaded and set the paths accordingly
    if (req.files && req.files.image) {
        image = req.files.image[0].path; // Adjust according to your files structure
    }

    if (req.files && req.files.nationalIdImage) {
        nationalIdImage = req.files.nationalIdImage[0].path; // Adjust according to your files structure
    }

    const errors = [];

    // Check if district is empty
    if (!district) {
        errors.push('District must be provided');
    }

    // Check if thana is empty
    if (!thana) {
        errors.push('Thana must be provided');
    }

    // Check if image is empty
    if (!image) {
        errors.push('Image must be provided');
    }

    // Check if nationalIdImage is empty
    if (!nationalIdImage) {
        errors.push('National ID Image must be provided');
    }

    // If there are errors, return them as an array
    if (errors.length > 0) {
        return res.status(400).json({ message: errors });
    }

    const userDetails = await UserDetails.findOne({ user: userId });

    if (userDetails) {
        userDetails.district = district || userDetails.district;
        userDetails.thana = thana || userDetails.thana;
        if (image) userDetails.image = image;
        if (nationalIdImage) userDetails.nationalIdImage = nationalIdImage;

        await userDetails.save();
    } else {
        // Create a new userDetails if it doesn't exist
        const newUserDetails = await UserDetails.create({
            user: userId,
            district,
            thana,
            image,
            nationalIdImage
        });

        if (!newUserDetails) {
            throw new Error('Failed to create user details');
        }
    }

    res.status(200).json({ message: "Profile updated successfully" });
});

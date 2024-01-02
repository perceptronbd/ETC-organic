const asyncHandler = require("express-async-handler");
const UserDetails = require("../../models/userDetailsModel");

exports.handleImage = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Initialize variable for image path
  let image;

  // Check if the file was uploaded and set the path accordingly
  if (req.file) {
    image = req.file.path;
  }

  const missingFields = [];

  // Check if image is empty
  if (!image) {
    missingFields.push("Image");
  }

  // Construct a message based on the missing fields
  let message;
  if (missingFields.length === 1) {
    message = `Please provide ${missingFields[0]}`;
  } else if (missingFields.length > 1) {
    message = `Please provide ${missingFields.join(", ")}`;
  }

  // If there are missing fields, return the message
  if (message) {
    return res.status(400).json({ message });
  }

  const userDetails = await UserDetails.findOne({ user: userId });

  if (userDetails) {
    if (image) userDetails.image = image;
    await userDetails.save();
  } else {
    // Create a new userDetails if it doesn't exist
    const newUserDetails = await UserDetails.create({
      user: userId,
      image,
    });

    if (!newUserDetails) {
      throw new Error("Failed to create user details");
    }
  }

  res.status(200).json({
    message: "Image updated successfully",
    imagePath: image,
  });
});

exports.handleNationalImage = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  // Initialize variable for nationalIdImage path
  let nationalIdImage;

  console.log("req.file", req.file);

  // Check if the file was uploaded and set the path accordingly
  if (req.file) {
    nationalIdImage = req.file.path;
    console.log("nationalIdImage", nationalIdImage);
  }

  const missingFields = [];

  // Check if nationalIdImage is empty
  if (!nationalIdImage) {
    missingFields.push("National ID Image");
  }

  // Construct a message based on the missing fields
  let message;
  if (missingFields.length === 1) {
    message = `Please provide ${missingFields[0]}`;
  } else if (missingFields.length > 1) {
    message = `Please provide ${missingFields.join(", ")}`;
  }

  // If there are missing fields, return the message
  if (message) {
    return res.status(400).json({ message });
  }

  const userDetails = await UserDetails.findOne({ user: userId });

  if (userDetails) {
    if (nationalIdImage) userDetails.nationalIdImage = nationalIdImage;
    await userDetails.save();
  } else {
    // Create a new userDetails if it doesn't exist
    const newUserDetails = await UserDetails.create({
      user: userId,
      nationalIdImage,
    });

    if (!newUserDetails) {
      throw new Error("Failed to create user details");
    }
  }

  res.status(200).json({
    message: "National ID Image updated successfully",
    imagePath: nationalIdImage,
  });
});

exports.handleDistrictAndDivision = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { district, division } = req.body;

  console.log("req.body", req.body);

  const missingFields = [];

  // Check if district is empty
  if (!district) {
    missingFields.push("District");
  }

  // Check if division is empty
  if (!division) {
    missingFields.push("Division");
  }

  // Construct a message based on the missing fields
  let message;
  if (missingFields.length === 1) {
    message = `Please provide ${missingFields[0]}`;
  } else if (missingFields.length > 1) {
    message = `Please provide ${missingFields.join(", ")}`;
  }

  // If there are missing fields, return the message
  if (message) {
    return res.status(400).json({ message });
  }

  const userDetails = await UserDetails.findOne({ user: userId });

  if (userDetails) {
    userDetails.district = district || userDetails.district;
    userDetails.thana = division || userDetails.thana;
    await userDetails.save();
  } else {
    // Create a new userDetails if it doesn't exist
    const newUserDetails = await UserDetails.create({
      user: userId,
      district,
      thana: division,
    });

    if (!newUserDetails) {
      throw new Error("Failed to create user details");
    }
  }

  res
    .status(200)
    .json({ message: "District and Division updated successfully" });
});

exports.getProfileDetails = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const userDetails = await UserDetails.findOne({ user: userId });

  if (!userDetails) {
    throw new Error("User details not found");
  }

  res.status(200).json({ userDetails });
});

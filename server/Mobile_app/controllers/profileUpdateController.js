const asyncHandler = require("express-async-handler");
const UserDetails = require("../../models/userDetailsModel");

exports.updateProfile = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Ensure this correctly fetches the user ID
  const { district, division } = req.body;

  console.log("req.files", req.files);
  console.log("req.body", req.body);

  // Initialize variables for image paths
  let image, nationalIdImage;

  // Check if the files were uploaded and set the paths accordingly
  if (req.files && req.files.image) {
    image = req.files.image[0].path; // Adjust according to your files structure
  }

  if (req.files && req.files.nationalIdImage) {
    nationalIdImage = req.files.nationalIdImage[0].path; // Adjust according to your files structure
  }

  const missingFields = [];

  // Check if district is empty
  if (!district) {
    missingFields.push("District");
  }

  // Check if thana is empty
  if (!division) {
    missingFields.push("Division");
  }

  // Check if image is empty
  if (!image) {
    missingFields.push("Image");
  }

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
      nationalIdImage,
    });

    if (!newUserDetails) {
      throw new Error("Failed to create user details");
    }
  }

  res.status(200).json({ message: "Profile updated successfully" });
});

exports.handleImage = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  console.log("req.file", req.file);
  console.log("req.body", req.body);

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

  res.status(200).json({ message: "Image updated successfully" });
});

exports.handleNationalImage = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  console.log("req.files", req.files);

  // Initialize variable for nationalIdImage path
  let nationalIdImage;

  // Check if the file was uploaded and set the path accordingly
  if (req.files && req.files.nationalIdImage) {
    nationalIdImage = req.files.nationalIdImage[0].path;
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

  res.status(200).json({ message: "National ID Image updated successfully" });
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

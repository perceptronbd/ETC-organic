const Withdraw = require("../../models/withdrawModel");
const MobileUser = require("../../models/mobileUserModel");
const asyncHandler = require("express-async-handler");

exports.createWithdraw = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Assuming you have user information in req.user

  // Fetch the user and check if it exists
  const user = await MobileUser.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const withdrawAmount = req.body.withdrawAmount;
  const paymentType = req.body.paymentType;
  const phoneNumber = req.body.phoneNumber;
  const bankId = req.body.bankId;

  if (!withdrawAmount || !paymentType) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  if (paymentType === "bank" && !bankId) {
    return res.status(400).json({ message: "Please provide bankId" });
  }

  if (
    (paymentType === "bkash" && !phoneNumber) ||
    (paymentType === "nagad" && !phoneNumber)
  ) {
    return res.status(400).json({ message: "Please provide phoneNumber" });
  }

  if (withdrawAmount <= 0) {
    return res
      .status(400)
      .json({ message: "Withdraw amount must be greater than 0" });
  }

  // Check if the user has enough taka for the withdrawal
  if (user.taka < withdrawAmount) {
    return res
      .status(400)
      .json({ message: "Insufficient taka for withdrawal" });
  }

  // Create a new withdraw record
  const withdraw = new Withdraw({
    userId: userId,
    bankId: bankId,
    withdrawAmount: withdrawAmount,
    paymentType: paymentType,
    phoneNumber: phoneNumber,
    status: "pending", // Set the status to pending by default
  });

  // Subtract the withdrawal amount from the user's taka
  user.taka -= withdrawAmount;

  // Save changes to the user model and the withdraw model
  await user.save();
  await withdraw.save();

  res
    .status(201)
    .json({ message: "Withdraw created successfully", withdraw, user });
});

exports.getWithdrawRequests = asyncHandler(async (req, res) => {
  try {
    const userId = req.user._id; // Assuming you have user information in req.user

    // Fetch the user and check if it exists
    const user = await MobileUser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const name = user.name;
    const mobileNumber = user.mobileNumber;

    console.log(name, mobileNumber);

    const withdraws = await Withdraw.find({ userId: userId }); // Filter withdraws by user ID

    res.status(200).json({ name, mobileNumber, withdraws });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

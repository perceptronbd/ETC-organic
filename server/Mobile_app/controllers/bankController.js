const Bank = require("../../models/bankModel");
const mongoose = require("mongoose");

const User = require("../../models/mobileUserModel");
const asyncHandler = require("express-async-handler");

// Controller to create a bank
exports.createBank = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  const { bankName, branch, accountNumber } = req.body;

  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  // Create a new bank
  const bank = new Bank({
    userId,
    bankName,
    branch,
    accountNumber,
  });

  // Save the bank to the database
  await bank.save();

  res.status(201).json(bank);
});

exports.fetchBanksByUser = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId);

    // Assuming your bank model has a field named 'user' that references the user
    const banks = await Bank.find({ userId: userId });
    console.log(banks);

    if (!banks || banks.length === 0) {
      return res.status(404).json({ message: "No banks found for the user" });
    }

    res.status(200).json(banks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteBank = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bankId } = req.body;

    console.log("deleteBank bankId:", bankId);
    console.log("Request Body:", req.body);

    Bank.findOne({ _id: bankId, userId: userId })
      .then((bank) => {
        console.log("deleteBank bank:", bank);

        if (!bank) {
          // Send a response and stop further execution by returning a resolved promise.
          res.status(404).json({ message: "Bank not found for the user" });
          return Promise.resolve(); // Prevent further execution.
        }

        // If the bank is found, delete it.
        return bank.deleteOne();
      })
      .then((result) => {
        // Check if the deletion was successful and a response hasn't been sent yet.
        if (result) {
          res.json({ message: "Bank deleted successfully" });
        }
      })
      .catch((error) => {
        console.error(error);
        // If an error occurs and no response has been sent, send an error response.
        if (!res.headersSent) {
          res.status(500).json({ message: "Error deleting bank" });
        }
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "something went wrong" });
  }
};

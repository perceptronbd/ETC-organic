const Bank = require('../../models/bankModel');
const mongoose = require('mongoose');

const User = require('../../models/mobileUserModel');
const asyncHandler = require('express-async-handler');

// Controller to create a bank
exports.createBank = asyncHandler(async (req, res) => {

    const userId = req.user._id;
    const {bankName, branch, accountNumber } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
        res.status(404).json({ message: 'User not found' });
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
        console.log(userId)

        // Assuming your bank model has a field named 'user' that references the user
        const banks = await Bank.find({ userId: userId });
        console.log(banks);

        if (!banks || banks.length === 0) {
            return res.status(404).json({ message: 'No banks found for the user' });
        }

        res.status(200).json(banks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteBank = (req, res) => {
    const userId = req.user._id;
    const bankId = req.body.bankId;
    const bankIdObject = new mongoose.Types.ObjectId(bankId);
  
    Bank.findOne({ _id: bankIdObject, userId: userId })
      .then(bank => {
        if (!bank) {
          return res.status(404).json({ message: "Bank not found for the user" });
        }
  
        return bank.deleteOne();
      })
      .then(() => {
        res.json({ message: "Bank deleted successfully" });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: "Error deleting bank" });
      });
  };
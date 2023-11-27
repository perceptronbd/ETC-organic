const Branch = require("../../models/branchModel");

const addBranch = async (req, res) => {
    const { name } = req.body;

    try {
        // Check if a branch with the same name already exists
        const existingBranch = await Branch.findOne({ name });

        if (existingBranch) {
            return res.status(400).json({ error: "Branch with this name already exists" });
        }

        // Create a new branch
        const newBranch = new Branch({ name });

        // Save the new branch to the database
        await newBranch.save();

        res.status(201).json({
            code: 201,
            data: { branch: newBranch },
            message: "Branch added successfully",
        });
    } catch (error) {
        console.error("Error adding branch:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const getBranch = async (req, res) => {
    try {
        const branches = await Branch.find();

        res.status(200).json({
            code: 200,
            data: branches,
        });
    } catch (error) {
        console.error('Error fetching branches:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {addBranch, getBranch}
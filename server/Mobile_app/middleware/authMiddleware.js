const jwt = require('jsonwebtoken');
const User = require('../../models/mobileUserModel'); // Adjust the path to your User model

const secretKey = process.env.JWT_SECRET; // It's better to keep this in an environment variable

const authenticateUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Assuming the token is sent in the 'Authorization' header as 'Bearer token'

        if (!token) {
            return res.status(401).send('Access denied. No token provided.');
        }

        const decoded = jwt.verify(token, secretKey);
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(401).send('The user belonging to this token no longer exists.');
        }

        req.user = user; // Set the user in the request object
        next();
    } catch (error) {
        res.status(401).send('Invalid token.');
    }
};

module.exports = authenticateUser;

const jwt = require('jsonwebtoken');
const User = require('../models/userSchema'); // Import your User model
const SECRECT_KEY = "sodjvhndjhnfoiwdoiwefoiwjfknalcnasdkf"

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);

    if (token == null) {
        return res.sendStatus(401); // Unauthorized if token is not provided
    }

    try {
        console.log(token);
        const decoded = jwt.verify(token,SECRECT_KEY);
        console.log(decoded);
        req.user = await User.findById(decoded._id); // Attach user object to request
        next(); // Proceed to the next middleware/controller
    } catch (err) {
        return res.sendStatus(403); // Forbidden if token is invalid
    }
};

module.exports = authenticateToken;

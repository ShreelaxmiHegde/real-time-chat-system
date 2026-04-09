const jwt = require('jsonwebtoken');
require('dotenv').config();

const varifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        console.log("Token varification failed")
        return res.status(401).json({
            message: "Token validation failed"
        });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        console.log("decoded jwt: ", decoded);
        req.user = decoded;
        console.log(req.user, "hitting next controller");
        next();
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
}

module.exports = varifyToken;
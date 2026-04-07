const pool = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { CreateUserSchema } = require('../users/users.schema');
const queries = require('./auth.repository');
require('dotenv').config();

const MAX_AGE = 3 * 24 * 60 * 60; // 3 days

const createToken = (id) => {
    return jwt.sign(
        { id }, // payload
        process.env.JWT_SECRET_KEY,
        { expiresIn: MAX_AGE }
    );
}

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const userValidationRes = CreateUserSchema.safeParse({
        username: username,
        email: email,
        password: password
    });

    if (!userValidationRes.success) {
        console.log(userValidationRes.error);

        return res.status(401).json({
            message: "Invalid credentials provided",
            error: userValidationRes.error //zodError instance
        });
    }

    try {
        let userData = userValidationRes.data;

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        const result = await pool.query(
            queries.signup,
            [userData.username, userData.email, hashedPassword]
        );

        const user = result.rows[0];
        const token = createToken(user.id);

        return res.status(201).json({
            message: "Signup was successful",
            token,
            user
        });

    } catch (err) {
        console.log(err);

        return res.status(500).json({
            message: "Signup failed"
        });
    }
}

const login = (req, res) => {
    const { email, password } = req.body;
}

module.exports = { signup, login };
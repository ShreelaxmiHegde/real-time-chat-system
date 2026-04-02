const pool = require('../../db');
const queries = require('./queries')

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (err, result) => {
        if(err) {
            return res.json({
                message: "Failed to fetch users"
            });
        } 

        return res.status(201).json(result.rows);
    });
}

const signup = (req, res) => {
    const {username, email, password} = req.body;
    pool.query(queries.signup, [username, email, password], (err, result) => {
        if(err) {
            return res.json({
                message: "Signup failed"
            });
        }

        return res.status(201).json({
            message: "Signup was successful"
        });
    });
}

module.exports = {
    getUsers,
    signup
};
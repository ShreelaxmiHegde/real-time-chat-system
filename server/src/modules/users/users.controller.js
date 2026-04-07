const pool = require('../../db');
const queries = require('./users.repository');

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

module.exports = {
    getUsers
};
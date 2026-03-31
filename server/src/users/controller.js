const pool = require('../../db');
const queries = require('./queries')

const getUsers = (req, res) => {
    console.log("getting users")
    pool.query(queries.getUsers, (err, result) => {
        if(err) {
            console.log(err);
            return res.json({
                message: "Failed to fetch users"
            });
        }

        return res.status(201).json(result.rows);
    });
}

// const signup = (req, res) => {
//     pool.query(queries.signup, (err, result) => {
//         if(err) {
//             console.log(err);
//             return res.json({
//                 message: "Signup failed"
//             });
//         }

//         return res.status(201).json({
//             message: "Signup was successful"
//         });
//     });
// }

module.exports = {
    getUsers,
    signup
};
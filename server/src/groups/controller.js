const pool = require('../../db');
const queries = require('./queries');

const showAllGroups = (req, res) => {
    pool.query(queries.showAllGroups, (err, result) => {
        if(err) {
            return res.json({
                message: "Falied to fetch groups"
            });
        }

        return res.status(201).json({
            data: result.rows
        });
    });
}

const createGroup = (req, res) => {
    const { name, created_by, created_at } = req.body;

    pool.query(
        queries.createGroup,
        [name, created_by, created_at],
        (err, result) => {
            if (err) {
                return res.json({
                    message: "Failed to create group"
                });
            }

            return res.status(201).json({
                res: result.rows
            });
        }
    );
}

const deleteGroup = (req, res) => {
    const { id } = req.params;

    pool.query(queries.deleteGroup, [id], (err, result) => {
        if(err) {
            console.log(err);
            return res.json({
                message: "Failed to delete group"
            });
        }

        return res.status(201).json({
            message: "Successfully deleted group"
        });
    });
}

module.exports = {
    showAllGroups,
    createGroup,
    deleteGroup
}
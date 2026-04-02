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
    const { name, createdBy, createdAt } = req.body;

    pool.query(
        queries.createGroup,
        [name, createdBy, createdAt],
        (err, result) => {
            if (err) {
                console.log(err)
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

const joinGroup = (req, res) => {
    const { groupId, userId } = req.body;
    console.log(groupId, userId)

    pool.query(queries.joinGroup, [groupId, userId], (err, result) => {
        if(err) {
            console.log(err);
            return res.json({
                message: "Failed to join group"
            });
        }

        return res.status(201).json({
            message: "Joined group successfully"
        });
    });
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
    joinGroup,
    deleteGroup
}
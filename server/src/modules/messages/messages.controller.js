const pool = require('../../db');
const queries = require('./messages.repository');

const getMessages = async (req, res) => {
    const { groupId } = req.params;

    pool.query(queries.getMessages, [groupId], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                message: "Failed to fetch messages"
            });
        }

        return res.json({
            data: result.rows
        });
    });
}

const sendMessage = async (req, res) => {
    const { groupId, userId, content, metadata } = req.body;

    pool.query(
        queries.sendMessage,
        [groupId, userId, content, metadata],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.json({
                    message: "Failed to send message"
                });
            }

            return res.status(201).json({
                message: result
            });
        });
}

const editMessage = async (req, res) => {
    const { groupId, msgId } = req.params;
    const { newMsg } = req.body;

    pool.query(queries.getMessages, [groupId, msgId, newMsg], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                message: "Failed to edit message"
            });
        }

        console.log(result);

        return res.status(201).json({
            message: result
        });
    });
}

const deleteMessage = async (req, res) => {
    const { groupId, msgId } = req.params;

    pool.query(queries.getMessages, [groupId, msgId], (err, result) => {
        if (err) {
            console.log(err);
            return res.json({
                message: "Failed to fetch messages"
            });
        }

        console.log(result);

        return res.json({
            message: result
        });
    });
}

module.exports = {
    getMessages,
    sendMessage,
    editMessage,
    deleteMessage
}
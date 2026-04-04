const getMessages = "SELECT sender_id, content FROM messages WHERE group_id = $1;"
const sendMessage = "INSERT INTO messages (group_id, sender_id, content, metadata) VALUES ($1, $2, $3, $4);";
const editMessage = "UPDATE messages SET content = $3 WHERE group_id = $1 AND id = $1;"
const deleteMessage = "DELETE FROM messages WHERE group_id = $1 AND id = $2;"

module.exports = {
    getMessages,
    sendMessage,
    editMessage,
    deleteMessage
}
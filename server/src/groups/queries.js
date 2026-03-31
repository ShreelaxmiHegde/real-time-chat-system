const showAllGroups = "SELECT name FROM groups;";
const createGroup = "INSERT INTO groups (name, created_by, created_at) VALUES ($1, $2, $3);";
const deleteGroup = "DELETE FROM groups WHERE id = $1"

module.exports = {
    showAllGroups,
    createGroup,
    deleteGroup
}
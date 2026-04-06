const showAllGroups = "SELECT name FROM groups;";
const createGroup = "INSERT INTO groups (name, created_by) VALUES ($1, $2);";
const joinGroup = "INSERT INTO group_members (group_id, user_id) VALUES ($1, $2);";
const deleteGroup = "DELETE FROM groups WHERE id = $1;";

module.exports = {
    showAllGroups,
    createGroup,
    joinGroup,
    deleteGroup
}
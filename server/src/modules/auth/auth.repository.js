const signup =
    `
    INSERT INTO users (username, email, password_hash) 
    VALUES ($1, $2, $3)
    RETURNING id, username, email;
    `
;

const login = 
    `
    SELECT * 
    FROM users 
    WHERE email = $1;
    `
;

const getUser =
    `
    SELECT id, username, email 
    FROM users
    WHERE id = $1;
    `
;

module.exports = { 
    signup,
    login,
    getUser
};
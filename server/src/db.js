const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.POOL_HOST,
    port: process.env.POOL_DB_PORT,
    user: process.env.POOL_USER,
    password: process.env.POOL_DB_PASSWORD,
    database: process.env.POOL_DATABASE
});

module.exports = pool;
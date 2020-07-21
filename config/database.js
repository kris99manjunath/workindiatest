const { createPool } = require('mysql');

require('dotenv').config();

const pool = createPool({
    port : process.env.SQL_PORT,
    host : process.env.SQL_HOST,
    user : process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit:10
});

module.exports = pool;
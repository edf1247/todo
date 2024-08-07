const {Pool} = require('pg');
require('dotenv').config()

console.log(process.env);

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.USERNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});

module.exports = {
    query: (text, params) => pool.query(text, params)
};
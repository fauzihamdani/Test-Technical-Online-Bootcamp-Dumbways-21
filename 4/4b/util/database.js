const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sewa_buku',
    password: ''
});

module.exports = pool.promise();
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,  // It's okay if this is empty string if your root user has no password
  database: process.env.DB_NAME
});

db.connect((err) => {  // Use db, NOT connection
  if (err) {
    console.error('Error connecting to DB:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;  // Export db, NOT connection

const mysql = require("mysql2");

// Create the connection to database
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Store",
});

module.exports = conn;

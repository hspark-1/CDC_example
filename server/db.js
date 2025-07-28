const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "testuser",
  password: process.env.DB_PASSWORD || "testpass",
  database: process.env.DB_NAME || "testdb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("MySQL connected");
});

module.exports = connection;

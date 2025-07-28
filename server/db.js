const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST || "mysql",
  user: process.env.DB_USER || "testuser",
  password: process.env.DB_PASSWORD || "testpass",
  database: process.env.DB_NAME || "testdb",
});

function tryConnect(retries = 5, delay = 2000) {
  connection.connect((err) => {
    if (err) {
      if (retries > 0) {
        console.log(`MySQL 연결 실패. 재시도... (${retries}회 남음)`);
        setTimeout(() => tryConnect(retries - 1, delay), delay);
      } else {
        console.error("MySQL 연결 실패: 재시도 모두 실패, 서버를 종료합니다.");
        process.exit(1);
      }
    } else {
      console.log("✅ MySQL connected");
    }
  });
}

tryConnect();

module.exports = connection;

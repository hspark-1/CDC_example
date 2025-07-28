const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "views")));

// 웹 페이지 렌더
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

// 데이터 저장
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).send("이름과 이메일은 필수입니다.");
  }
  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err) => {
      if (err) return res.status(500).send("DB Insert Error");
      res.redirect("/");
    }
  );
});

// 저장된 데이터 조회
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).send("DB Read Error");
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log("🚀 서버 시작!");
});

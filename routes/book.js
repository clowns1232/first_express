var express = require("express");
var db = require("../database");
var router = express.Router();

var dbSize = db.size;

const conn = require("../mariadb");

router.get("/", function (req, res) {
  conn.query(`SELECT * FROM book`, function (err, results, fields) {
    if (results.length) {
      res.status(200).json(results);
    } else {
      res.status(200).json({ message: "책이 존재하지 않습니다." });
    }
  });
});

router.get("/:id", function (req, res) {
  const { id } = req.params;

  conn.query(
    `SELECT * FROM book where id=${id}`,
    function (err, results, fields) {
      if (results.length) {
        res.status(200).json(results);
      } else {
        res.status(200).json({ message: "존재하지 않는 책 입니다." });
      }
    }
  );
});

router.post("/", function (req, res) {
  const { title, subTitle, description, author } = req.body;

  conn.query(
    `INSERT INTO book (title, subTitle, description, author)
      VALUE (?, ?, ?, ?)`,
    [title, subTitle, description, author],
    function (err, results, fields) {
      res.status(201).json(results);
    }
  );
});

router.delete("/", function (req, res) {
  const { id } = req.body;
  conn.query(
    `DELETE FROM book WHERE id = ?`,
    id,
    function (err, results, fields) {
      res.status(201).json(results);
    }
  );
});

module.exports = router;

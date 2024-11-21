var express = require("express");
var db = require("../database");
var router = express.Router();

var dbSize = db.size;

router.get("/", function (req, res) {
  const dbArray = Array.from(db.values());

  res.json(dbArray);
});

router.get("/:id", function (req, res) {
  const { id } = req.params;
  if (id > dbSize) res.json({ message: "존재하지 않는 책 입니다." });

  const dbArray = Array.from(db.values());

  res.json(dbArray[id - 1]);
});

router.post("/", function (req, res) {
  const { title, subTitle, description, author } = req.body;
  const id = dbSize + 1;

  if ((title && subTitle && description && author) === undefined)
    res.json({ message: "데이터가 부족합니다." });

  const data = {
    id,
    title,
    subTitle,
    description,
    author,
  };

  res.json(data);
});

module.exports = router;

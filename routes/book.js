var express = require("express");
var db = require("../database");
var router = express.Router();

var dbSize = db.size;

router.get("/", function (req, res) {
  if (dbSize < 0) res.json({ message: "책이 존재하지 않습니다." });
  const dbArray = Array.from(db.values());
  const dbObj = {};
  dbArray.forEach((data) => {
    dbObj[data.id] = data;
  });

  res.json(dbObj);
});

router.get("/:id", function (req, res) {
  const { id } = req.params;

  const dbArray = Array.from(db.values());
  const isExist =
    dbArray.findIndex((data) => {
      return parseInt(data.id) === parseInt(id);
    }) > -1;

  if (isExist === false)
    return res.json({ message: "존재하지 않는 책 입니다." });

  res.json(dbArray[id - 1]);
});

router.post("/", function (req, res) {
  const { title, subTitle, description, author } = req.body;
  const dbArray = Array.from(db.values());

  const id = dbArray.pop().id + 1;

  if ((title && subTitle && description && author) === undefined)
    res.json({ message: "데이터가 부족합니다." });

  const data = {
    id,
    title,
    subTitle,
    description,
    author,
  };

  db.set(id, data);

  res.json(data);
});

router.delete("/:id", function (req, res) {
  const { id } = req.params;
  const dbArray = Array.from(db.values());
  const isExist = dbArray.find((data) => data.id === id);

  if (isExist) res.json({ message: "존재하지 않는 책 입니다." });

  const filterDbArray = dbArray.filter((data) => {
    return parseInt(data.id) !== parseInt(id);
  });
  const dbObj = {};
  dbArray.forEach((data) => {
    dbObj[data.id] = data;
  });

  db.clear();
  filterDbArray.forEach((data, index) => {
    db.set(index, data);
  });

  res.json({
    message: "데이터가 삭제되었습니다.",
  });
});

module.exports = router;

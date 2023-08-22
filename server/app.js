const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT ?? 3000;
const arrContent = require("./arr-content");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json(arrContent);
});

const updateArrContentFile = (newArrCont) => {
  fs.writeFile(
    "./arr-content.js",
    `module.exports = ${JSON.stringify(newArrCont)}`,
    function (error) {
      if (error) throw error;
      console.log("Асинхронная запись файла завершена.");
    }
  );
};

app.patch("/", (req, res) => {
  const partOfChangeTitle = arrContent.reduce((acc, item) => {
    if (item.id === req.body["id"]) {
      acc.push(req.body);
      return acc;
    } else {
      acc.push(item);
      return acc;
    }
  }, []);
  res.send("access");
  updateArrContentFile(partOfChangeTitle);
});

app.patch("/upload", (req, res) => {
  let file = req.body;
  const changeImgArrContent = arrContent.map((item) => {
    if (item.id === file["index"] + 1) {
      console.log(item.name);
      item.name = file["imageURL"];
    }
    return item;
  });
  updateArrContentFile( changeImgArrContent);
  if (!file) res.send("Ошибка при загрузке файла");
  else res.send("Файл загружен");
});

app.listen(PORT);

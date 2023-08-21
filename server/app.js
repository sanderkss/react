const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT ?? 3000;
const axios = require("axios");
const arrContent = require("./arr-content");
const bodyParser = require("body-parser");
const multer = require('multer');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use(multer({dest:"img"}).single("file"));
// const upload = multer({
//   dest: path.join(__dirname, 'img')
// });

app.get("/", function (req, res) {
  res.json(arrContent);
});

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
  fs.writeFile(
    "./arr-content.js",
    `module.exports = ${JSON.stringify(partOfChangeTitle)}`,
    function (error) {
      if (error) throw error;
      console.log("Асинхронная запись файла завершена.");
    }
  );
});


app.post('/upload', (req, res, next) => {
    let file = req.body.file;
    console.log("file",file);
    if(!file)
        res.send("Ошибка при загрузке файла");
    else
        res.send("Файл загружен");

//   console.log(req.body.file)
// const file = req.body.file;
// // const newFileName = encodeURI(Date.now() + "-" + file.name)
// file.mv(`${__dirname}/img/${newFileName}`, function (error) {
//   if (error) throw error;
//   console.log("все сделано");
// })
})

app.listen(PORT);

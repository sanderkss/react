const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT ?? 3000;
const axios = require("axios");
const arrContent = require("./arr-content");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

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


app.post('/upload', (req,res) => {
  console.log(req.body)
const file = req.files.file;
const newFileName = encodeURI(Date.now() + "-" + file.name)
file.mv(`${__dirname}/img/${newFileName}`, err =>{
  if(err){
    console.log(err)
  } res.send("file is upload")
})
})

app.listen(PORT);

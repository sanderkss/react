const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const arrContent = require("./arr-content");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Data = require("./dblogin");
const Section = require("./dbcontent");

const PORT = process.env.PORT ?? 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  Section
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.patch("/delete", (req, res) => {
  const recordId = req.body[0]['_id'];
  Section.findByIdAndRemove(recordId)
  .then(() => {Section.find()
    .then((data) => {
      console.log(data)
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
})
.catch((error) => {
  res.status(500).json({ error: error.message });
});
});

app.post("/create", (req, res) => {
  Section.create(req.body)
  .then(() => {Section.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
})
.catch((error) => {
  res.status(500).json({ error: error.message });
});
});


app.patch("/", async(req, res) => {
  const recordId = req.body['_id'];
  await Section.findByIdAndUpdate(recordId, req.body, { new: true })
  .then((updatedData) => {
    console.log(updatedData)
    res.json(updatedData);
  })
  .catch((error) => {
    res.status(500).json({ error: error.message });
  });
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
  updateArrContentFile(changeImgArrContent);
  if (!file) res.send("Ошибка при загрузке файла");
  else res.send("Файл загружен");
});

app.get("/users", async (req, res) => {
  Data.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening PORT ${PORT}`);
});

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
  Section.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.delete("/:id", (req, res) => {
  idD = req.params.id
  Section.findByIdAndRemove(idD)
    .then(() => {
      Section.find()
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

app.post("/create", async (req, res) => {
  let fieldForm;
  await Section.find().then((data) => {
    let id = data[data.length - 1]["id"] + 1;
    fieldForm = { id: id, title: " ", name: " ", text: " " };
    return fieldForm;
  });
  await Section.create(fieldForm)
    .then(() => {
      Section.find()
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

app.patch("/", async (req, res) => {
  const recordId = req.body["_id"];
  await Section.findByIdAndUpdate(recordId, req.body, { new: true })
    .then((updatedData) => {
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

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const jwt = require("jsonwebtoken");
const arrContent = require("./arr-content");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Data = require("./dblogin");
const Section = require("./dbcontent");
const Token = require("./dbtoken");

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
  idD = req.params.id;
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

app.patch("/registr", (req, res) => {
  const { login, password } = req.body;
  const user = new Data({ login, password });
  user
    .save()
    .then(() =>
      res.status(201).json({ message: "User registered successfully" })
    )
    .catch((err) => res.status(500).json({ error: err.message }));
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

app.post("/users", (req, res) => {
  const { login, password } = req.body;
  Data.findOne({ login, password })
    .then((user) => {
      if (!user) {
        return res.json(false);
      } else {
        const token = jwt.sign({ userId: user["_id"] }, "secret-key");
        const uploadToken = new Token({ token });
        uploadToken
          .save()
          .then(() => console.log("Token is save"))
          .catch((err) => res.status(500).json({ error: err.message }));
        res.json({ token });
      }
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.post("/checktoken", (req, res) => {
  const authHeader = req.body["headers"]["Authorization"];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Invalid token format" });
  }
  const token = authHeader.split(" ")[1];
  Token.findOne({ token })
    .then((user) => {
      if (!user) {
        return res.json(false);
      }
      return res.json(true);
    })
    .catch((err) => {
      console.error("Failed to verify token", err);
      return res.status(500).json({ error: "Internal server error" });
    });
});

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening PORT ${PORT}`);
});

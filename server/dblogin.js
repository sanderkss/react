const mongoose = require("mongoose");

const url = "mongodb+srv://sanderkss:123@cluster0.ltslojc.mongodb.net/";
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
  const connection = mongoose.createConnection('mongodb+srv://sanderkss:123@cluster0.ltslojc.mongodb.net/user');

const dataSchema = new mongoose.Schema({
  login: String,
  password: String,
});

const Data = connection.model("user", dataSchema);

module.exports = Data;
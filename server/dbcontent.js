const mongoose = require("mongoose");
const connection = mongoose.createConnection(
    "mongodb+srv://sanderkss:123@cluster0.ltslojc.mongodb.net/content"
  );
  const Schema = mongoose.Schema;
  const MyModelSchema = new Schema({
    id: Number,
    title: String,
    name: String,
    text: String,
  });
  const Section = connection.model("student", MyModelSchema);

  module.exports = Section;
const mongoose = require("mongoose");
const connection = mongoose.createConnection(
  "mongodb+srv://sanderkss:123@cluster0.ltslojc.mongodb.net/token"
);
const Schema = mongoose.Schema;
const MyModelSchema = new Schema({
  token: String,
});
const Token = connection.model("token", MyModelSchema);

module.exports = Token;

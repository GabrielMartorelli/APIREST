const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const livroSchema = Schema({
  titulo: {
    type: String,
  },
  autor: {
    type: String,
  },
});

module.exports = mongoose.model("livro", livroSchema);

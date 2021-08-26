const mongoose = require("mongoose");
const livro = mongoose.model("livro");

// ENVIAR UM AO BANCO -> CREATE
exports.adiciona_um_livro = (req, res) => {
  let novo_livro = new livro(req.body);
  novo_livro.save((err, livro) => {
    if (err) {
      res.send(err);
    }
    res.json(livro);
  });
};

// PEGAR TODOS -> READ
exports.lista_todos_os_livros = (req, res) => {
  livro.find({}, (err, livros) => {
    if (err) {
      res.send(err);
    }
    res.json(livros);
  });
};

// PEGAR UM PELO ID -> READ
exports.lista_um_livro = (req, res) => {
  livro.findOne({ _id: req.params.livroId }, (err, livro) => {
    if (err) {
      res.send(err);
    }
    res.json(livro);
  });
};

// EDITAR UM REGISTRO DO BANCO -> EDIT
exports.atualiza_um_livro = (req, res) => {
  livro.findOneAndUpdate(
    { _id: req.params.livroId },
    req.body,
    { new: true },
    (err, livro) => {
      if (err) {
        res.send(err);
      }
      res.json(livro);
    }
  );
};

// DELETAR UM REGISTRO DO BANCO -> DELETE
exports.remove_um_livro = (req, res) => {
  livro.remove({ _id: req.params.livroId }, (err, livro) => {
    if (err) {
      res.send(err);
    }
    res.json({
      Mensagem: `O livro com id: ${req.params.livroId}, foi deletado com sucesso do registro!`,
    });
  });
};

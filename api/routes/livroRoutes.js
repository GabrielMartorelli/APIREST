const livroController = require("../controllers/livroController");

module.exports = (app) => {
  app
    .route("/livro")
    .get(livroController.lista_todos_os_livros)
    .post(livroController.atualiza_um_livro);

  app
    .route("/livro/:livroId")
    .get(livroController.lista_um_livro)
    .put(livroController.atualiza_um_livro)
    .delete(livroController.remove_um_livro);
};

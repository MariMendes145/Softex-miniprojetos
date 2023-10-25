const express = require("express");
const Routes = express.Router();
const livros = require("../data/books");
Routes.use(express.json());

//criar rota padrão, listar todos os livro cadastrados
Routes.get("/livros", function (req, res) {
  res.status(200).send(livros);
});
Routes.get("/livros/:isbn", (req, res) => {
  const isbnLivros = req.params.isbn;
  const livro = livros.find((a) => a.isbn === isbnLivros);

  if (!livro) {
    res.status(404).json({ error: "conta nao encontrada" });
  } else {
    res.json(livro);
  }
});

// cadastrar novo  cadastro carro
Routes.post("/cadastrarLivro", function (req, res) {
  const { titulo, autor, isbn } = req.body;
  const livro = {
    titulo,
    autor,
    isbn,
  };
  livros.push(livro);
  res.status(201).send("Novo livro cadastrado com sucesso!");
});
// alterar dados do cadastro por índice
Routes.put("/livros/:isbn", function (req, res) {
  let index = buscarIndexSelecaoIsbn(req.params.isbn);
  livros[index].titulo = req.body.titulo;
  livros[index].autor = req.body.autor;

  res.json(livros);
});
// deletar um cadastro
Routes.delete("/livros/:isbn", function (req, res) {
  let index = buscarIndexSelecaoIsbn(req.params.isbn);
  livros.splice(index, 1);
  res.status(201).send(`Livro ${req.params.isbn} excluído com sucesso!`);
});

//buscar índice por isbn
function buscarIndexSelecaoIsbn(isbn) {
  return livros.findIndex((livro) => livro.isbn == isbn);
}
module.exports = Routes;

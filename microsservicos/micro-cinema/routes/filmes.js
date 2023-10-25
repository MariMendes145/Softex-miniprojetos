const express = require("express");
const Routes = express.Router();
const filmes = require("../data/filmes");
Routes.use(express.json());

//criar rota padrão, listar todos os filmes cadastrados
Routes.get("/filmes", function (req, res) {
  res.status(200).send(filmes);
});
//buscar por ID filme específico
Routes.get("/filmes/:id", (req, res) => {
  const idFilme = req.params.id;
  const filme = filmes.find((a) => a.id == idFilme);

  if (!filme) {
    res.status(404).json({ error: "conta nao encontrada" });
  } else {
    res.json(filme);
  }
});

// cadastrar novo  cadastro filme
Routes.post("/cadastrarFilme", function (req, res) {
  const { id, titulo, descricao } = req.body;
  const filme = {
    id,
    titulo,
    descricao,
  };
  filmes.push(filme);
  res.status(201).send("Filme cadastrado com sucesso!");
});
module.exports = Routes;

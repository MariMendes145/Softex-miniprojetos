const express = require("express");
const app = express();

app.get("/api/filmes/:id", async (req, res) => {
  const idFilme = req.params.id;
  const CinemaServiceUrl = "http:localhost:3002/filmes";

  try {
    const response = await fetch(`${CinemaServiceUrl}/${idFilme}`);
    if (response.status === 200) {
      const filme = await response.json();
      res.json(filme);
    } else if (response.status === 404) {
      res.status(404).json({ error: "Filme não encontrado!" });
    } else {
      res.status(500).json({ error: "Erro  ao buscar informações" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(3333, () => {
  console.log("API rodando");
});

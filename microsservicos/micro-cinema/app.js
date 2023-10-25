const express = require("express");
const Router = require("../micro-cinema/routes/filmes");

PORT = 3002;
const app = express();
app.use(Router);
//escutar porta
app.listen(PORT, () => {
  console.log(`Servidor Rodando no endereço http://localhost:${PORT}/filmes`);
});

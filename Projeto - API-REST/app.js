const express = require("express");
const Router = require("./routes/books.js");

PORT = 3001;
const app = express();
app.use(Router);
//escutar porta
app.listen(PORT, () => {
  console.log(`Servidor Rodando no endereço http://localhost:${PORT}/livros`);
});

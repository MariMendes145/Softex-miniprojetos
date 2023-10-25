import app from "../programa4/src/app.js";
const PORT = 3001;

//escutar porta
app.listen(PORT, () => {
  console.log(`Servidor Rodando no endereço http://localhost:${PORT}/carros`);
});

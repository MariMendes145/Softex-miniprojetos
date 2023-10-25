const express = require("express");
const mysql2 = require("mysql2");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "empresa",
});

db.connect((error) => {
  if (error) {
    console.log("Erro ao conectar com o banco de dados,", error);
  } else {
    console.log("Banco de dados conectado com sucesso!");
  }
});

app.get("/usuario/formulario", (req, res) => {
  res.render("formulario");
});
app.post("/usuario/cadastrar", (req, res) => {
  const { nome, email } = req.body;
  const comando = "INSERT INTO cliente (nome, email) VALUES(?, ?)";
  db.query(comando, [nome, email], (err) => {
    if (err) {
      console.log("Erro ao inserir no banco de dados");
    } else {
      res.send("Usuário cadastrado com sucesso!");
    }
  });
});
app.listen(3000, () => {
  console.log("Servidor rodando....");
});

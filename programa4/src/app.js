import express from "express";

const app = express();

// ler body com json
app.use(express.json());

const carro = [
  {
    id: 1,
    modelo: "Palio",
    valor: 35000,
    ano: 2010,
  },
  {
    id: 2,
    modelo: "Fiat",
    valor: 30000,
    ano: 2005,
  },
  {
    id: 3,
    modelo: "Gol",
    valor: 48000,
    ano: 2020,
  },
];
//criar rota padrão, listar todos os carros cadastrados
app.get("/carros", function (req, res) {
  res.status(200).send(carro);
});
// selecionar por id
app.get("/carros/:id", function (req, res) {
  res.json(buscarSelecaoPorId(req.params.id));
});
// cadastrar novo  cadastro carro
app.post("/cadastrar", function (req, res) {
  carro.push(req.body);
  res.status(201).send("Novo carro cadastrado com sucesso!");
});
// alterar dados do cadastro por índice
app.put("/carros/:id", function (req, res) {
  let index = buscarIndexSelecao(req.params.id);
  carro[index].modelo = req.body.modelo;
  carro[index].valor = req.body.valor;
  carro[index].ano = req.body.ano;

  res.json(carro);
});
// deletar um cadastro
app.delete("/carros/:id", function (req, res) {
  let index = buscarIndexSelecao(req.params.id);
  carro.splice(index, 1);
  res.status(201).send(`Carro com ${req.params.id} excluído com sucesso!`);
});
//função selecionar ID
function buscarSelecaoPorId(id) {
  return carro.filter((carro) => carro.id == id);
}
//função selecionar indice por ID
function buscarIndexSelecao(id) {
  return carro.findIndex((carro) => carro.id == id);
}

export default app;

const express = require("express");

const app = express();
// ler body com json
app.use(express.json());
//Banco de dados fictício
const contasBancoDados = [];

//Listar todos os registros
app.get("/contas", (req, res) => {
  res.status(200).send(contasBancoDados);
});
//Função para filtrar por id
function buscarPorId(id) {
  return contasBancoDados.filter(
    (contasBancoDados) => contasBancoDados.id == id
  );
}
//pegar somente o registro com o id
app.get("/:id", (req, res) => {
  res.json(buscarPorId(req.params.id));
});

//criar uma conta
app.post("/cadastrarConta", (req, res) => {
  const { id, nome, cpf, conta, agencia } = req.body;

  // Verificar se o CPF já existe no banco de dados
  const contaExistente = contasBancoDados.find((conta) => conta.cpf === cpf);

  if (contaExistente) {
    return res.status(200).json({ mensagem: "CPF já cadastrado!" });
  }

  // Se o CPF não existe, criar a conta
  const novaConta = { id, nome, cpf, conta, agencia, saldo: 0, extrato: [] };
  contasBancoDados.push(novaConta);

  return res.status(200).json({ mensagem: "Conta criada com sucesso!" });
});

// Atualizar dados da conta do cliente
//função selecionar indice por ID
function buscarIndexSelecao(id) {
  return contasBancoDados.findIndex(
    (contasBancoDados) => contasBancoDados.id == id
  );
}
// alterar dados do cadastro por índice
app.put("/conta/:id", function (req, res) {
  let index = buscarIndexSelecao(req.params.id);
  contasBancoDados[index].nome = req.body.nome;
  contasBancoDados[index].cpf = req.body.cpf;
  contasBancoDados[index].conta = req.body.conta;
  contasBancoDados[index].agencia = req.body.agencia;

  res.json(contasBancoDados);
});

//Deletar registro - antes tinha feito pegando o CPF, mas sempre estava deletando o errado, resolvi pegar por índice já q é único
app.delete("/conta/:id", (req, res) => {
  const id = req.params.id;
  const index = contasBancoDados.findIndex((index) => index.id == id);

  if (index !== -1) {
    contasBancoDados.splice(index, 1);
    res.status(200).json({ message: "Registro excluído com sucesso!" });
  } else {
    res.status(404).json({ message: "Registro não encontrado!" });
  }
});

// Rota para realizar um depósito

//realizar um saque

//extrato bancario do cliente por data
//Escutar porta
app.listen(3333, () => {
  console.log("Meu servidor está funcionando na porta 3333!");
});

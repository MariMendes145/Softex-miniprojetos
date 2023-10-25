class ContaBancaria {
  constructor(id, nome, cpf, conta, agencia, saldo = 0, extrato = []) {
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.conta = conta;
    this.agencia = agencia;
    this.saldo = saldo;
    this.extrato = extrato;
  }

  // Função para realizar um depósito
  depositar(valor) {
    if (valorDepositado > 0) {
      this.saldo += valor;
      this.extrato.push({
        tipo: "Depósito",
        valorDepositado,
        data: new Date(),
      });
      return `Operação realizada com sucesso! Foi depositado o valor de  ${valor}.`;
    } else {
      return "Valor de depósito inválido!";
    }
  }

  // Função para realizar um saque
  sacar(valor) {
    if (valor > 0) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
        this.extrato.push({ tipo: "Saque", valor, data: new Date() });
        return `Saque de ${valor} realizado com sucesso.`;
      } else {
        return "Saldo insuficiente.";
      }
    } else {
      return "Valor de saque inválido.";
    }
  }

  // Função para buscar o extrato bancário
  obterExtrato() {
    return this.extrato;
  }
}

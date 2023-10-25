function simular() {
  //linha 3 a 7  puxando informacao do html digitada pelo usuario
  const nomeUsuario = document.querySelector("#username").value;
  const mensalidade = document.querySelector("#mensalidade").value;
  const tempContribuicaoAno =
    document.querySelector("#tempoContribuicao").value;
  const resultado = document.querySelector("#valorTotalInvestimento");

  // passos para converter simular investimento
  const taxaJurosMes = 0.517 / 100;
  const conversaoTempContribuicao = tempContribuicaoAno * 12; // conversao dos anos em meses
  let jurosComposto =
    Math.pow(1 + taxaJurosMes, conversaoTempContribuicao) +
    (mensalidade *
      (Math.pow(1 + taxaJurosMes, conversaoTempContribuicao) - 1)) /
      taxaJurosMes;

  resultado.innerHTML = `Olá, ${nomeUsuario}, juntando R$ ${mensalidade} todo mês, por ${conversaoTempContribuicao} meses, você terá R$ ${jurosComposto.toFixed(
    2
  )}.`;
}

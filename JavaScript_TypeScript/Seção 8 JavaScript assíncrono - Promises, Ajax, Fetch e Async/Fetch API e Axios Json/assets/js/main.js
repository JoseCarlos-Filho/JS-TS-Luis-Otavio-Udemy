// fetch("pessoas.json")
//   // primeiro then converte em json
//   .then((resposta) => resposta.json())
//   .then((json) => carregaElementos(json));

axios("pessoas.json").then((resposta) => carregaElementos(resposta.data));

function carregaElementos(json) {
  const table = criaTable("table");
  for (let pessoa of json) {
    const tr = criaTable("tr");

    let td = criaTable("td");
    td.innerHTML = pessoa.nome;
    tr.appendChild(td);

    td = criaTable("td");
    td.innerHTML = pessoa.idade;
    tr.appendChild(td);

    td = criaTable("td");
    td.innerHTML = pessoa.salario;
    tr.appendChild(td);

    td = criaTable("td");
    td.innerHTML = pessoa.email;
    tr.appendChild(td);

    table.appendChild(tr);
  }
  console.log(table);
  const resultado = document.querySelector(".resposta");
  resultado.appendChild(table);
}

function criaTable(elemento) {
  if (elemento == "table") return (elemento = document.createElement("table"));
  if (elemento == "tr") return (elemento = document.createElement("tr"));
  if (elemento == "td") return (elemento = document.createElement("td"));
}

const { FORMERR } = require("dns");
const path = require("path");
const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");
const escreve = require("./modules/escrever");
const ler = require("./modules/ler");

// const pessoas = [
//   { nome: "João" },
//   { nome: "Carlos" },
//   { nome: "José" },
//   { nome: "Maria" },
//   { nome: "Genoveva" },
// ];

// const json = JSON.stringify(pessoas, "", 2);
// escreve(caminhoArquivo, json);

async function leArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
  //   console.log(dados);
  //   return dados;
}

function renderizaDados(dados) {
  //   console.log(dados);
  dados = JSON.parse(dados);
  dados.forEach((val) => console.log(val.nome));
}

leArquivo(caminhoArquivo);

// const dadosArquivo = leArquivo(caminhoArquivo).then((dados) =>
//   console.log(dados)
// );
// console.log(dadosArquivo);

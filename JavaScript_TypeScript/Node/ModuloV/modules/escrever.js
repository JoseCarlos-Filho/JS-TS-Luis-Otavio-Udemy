const fs = require("fs").promises;

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: "w" });
};

// const path = require("path");
// const caminhoArquivo = path.resolve(__dirname, "..", "teste.json");

// const pessoas = [
//   { nome: "João" },
//   { nome: "Carlos" },
//   { nome: "José" },
//   { nome: "Maria" },
//   { nome: "Genoveva" },
// ];

// const json = JSON.stringify(pessoas, "", 2);

// fs.writeFile(caminhoArquivo, json, { flag: "w" });
// fs.writeFile(caminhoArquivo, "Frase 1\n", { flag: "a", encoding: "utf8" });

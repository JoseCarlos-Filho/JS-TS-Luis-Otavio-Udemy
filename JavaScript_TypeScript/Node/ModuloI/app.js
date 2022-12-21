// const modulo = require("./modI");
// const falanome = modulo.falaNome;
// console.log(falanome());

// const { nome, sobrenome, falaNome } = require("./modI");
// console.log(nome, sobrenome);
// console.log(falaNome());

// const { Carro } = require("./modI");
// const car1 = new Carro("Porshe");
// console.log(car1);

// const path = require("path");
const axios = require("axios");

axios("https://www.otaviomiranda.com.br/files/json/pessoas.json")
  .then((response) => console.log(response.data))
  .catch((e) => console.log(e));

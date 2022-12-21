const nome = "José";
const sobrenome = "Carlos Rodrigues";

const falaNome = () => nome + " " + sobrenome;

const { log } = console;
// log(module);

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";
log(exports);

class Carro {
  constructor(nomeCarro) {
    this.nomeCarro = nomeCarro;
  }
}

exports.Carro = Carro;

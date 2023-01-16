module.exports = function (x, y) {
  return x * y;
};

module.exports = class Dog {
  constructor(nome) {
    this.nome = nome;
  }

  latir() {
    console.log(`${this.nome} está fazendo au au`);
  }

  correr() {
    console.log(`${this.nome} está correndo!`);
  }

  pular() {
    console.log(`${this.nome} está pulando!`);
  }
};

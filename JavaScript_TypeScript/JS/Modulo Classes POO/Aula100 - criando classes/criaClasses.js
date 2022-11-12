// Aula
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está Falando.`);
  }

  comer() {
    console.log(`${this.nome} está comento.`);
  }

  beber() {
    console.log(`${this.nome} está bebendo.`);
  }
}

// instância da classe Pessoa
const p1 = new Pessoa("José", "Carlos");
console.log(p1);

// Um comparativo com função construtora.
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está Falando.`);
};

const p2 = new Pessoa2("Elaine", "Tiemi");
console.log(p2);
// O metodo vai para o prototype

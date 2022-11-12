// Utilizando getter e setter com classes

// Criando uma propriedade de classe privada,
// Esta propriedade pode somente ser acessada dentro da classe,
// Neste caso para manipular esta propriedade privada o uso do get e set
// é necessário para fazer a obtenção da informação(get()) como a manipulação
// do valor(set()).
const _velocidade = Symbol("velocidade");
class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 55;
  }

  // No atributi utilizando o set sempre deve passar um valor como parâmetro.
  set velocidade(valor) {
    console.log("SETTER");
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log("GETTER");
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const veiculo = new Carro("Fusca");
// for (let i = 0; i <= 200; i++) {
//   veiculo.acelerar();
// }

// utilizando o set() da classe
veiculo.velocidade = 99;
// Utilizando o get() da classe passando o valor para a propriedade.
// veiculo.velocidade = 100;
console.log(veiculo.velocidade);
console.log();

/* ------------------------------ CLASSE PESSOA -------------------------------- */
class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + " " + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const p1 = new Pessoa("José", "Carlos");
p1.nomeCompleto = "Elaine Tiemi Ito Rodrigues";
// console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);

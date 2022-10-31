// lITERAL DE STRING '' ""
// LITERAL DE ARRAY []
// OBJETO LITERAL {}

const pessoa = {
  nome: "José",
  sobrenome: "Carlos",
  altura: 1.84,
  idade: 37,
};

// Duas formas de acessar a chave de um Objeto:
// através da notação por . ou []
console.log(pessoa.nome);
console.log(pessoa["sobrenome"]);

// Dependendo do caso a notação de [] é uma boa opção
// por exemplo o usuário quer enviar msg de um campo que
// não sabemos, então utiliza-se de uma forma dinâmica.
// Repare que neste exemplo a constante chave pode ser qualquer
// atributo do objeto sendo assim chave é acessada de forma
// dinâmica.
// Exemplo:
const chave = "idade";
console.log(pessoa[chave]);

// Formas de declarar um Objeto
// Pode ser de forma LITERAL ou
// com FUNÇÕES CONSTRUTORAS
// Exemplo:

// Contrutor
const pessoa1 = new Object();
pessoa1.nome = "Jose";
pessoa1.sobrenome = "Carlos";

// Literal
const pessoa2 = {
  nome: "José",
  sobrenome: "Carlos",
};
console.log("");
console.log(pessoa1, pessoa2);

/* ---------------------------- Objetos e Metodos ---------------------------- */
console.log("");
const humano = new Object();
humano.nome = "José";
humano.sobrenome = "Carlos";
humano.idade = 37;
humano.falaNome = function () {
  return `O nome deste Humano é : ${this.nome}`;
};

humano.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(humano.falaNome());
console.log(humano.getDataNascimento());

// Olhando as chaves do Objeto e seus valores]
console.log("");
for (let chave in humano) {
  console.log(humano[chave]);
}

// Moldes de funções mais comuns para criar um objeto.
// Factory functions / Constructor functions / Classes
console.log("");

// Factory functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("José", "Rodrigues");
console.log(p1.nomeCompleto);

// Constructor Functions
console.log("");
function Gente(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Trava o objeto não permitindo alteração.
}
// Objeto = this => acessa o atributo do objeto criado de forma dinâmica
// Repare na linha de código abaixo, é uma operação incorrta por tentar
// alterar o valor do endereço de memória de uma constante
// o que é incorreto.
// Não é o caso deste linha: person1.nome em que se acessa o atributo nome
// do objeto person1.
// Outra situação é travar um objeto de forma que seus atributos não seja alterado.
// Para isso utiliza o comando Object.freeze(nomedoobjeto).
const person1 = new Gente("Jose", "Carlos");
// person1 = "é nois";
// Object.freeze(person1);
person1.nome = "Eu";
const person2 = new Gente("Elaine", "Tiemi");
console.log(person1);
console.log(person2);

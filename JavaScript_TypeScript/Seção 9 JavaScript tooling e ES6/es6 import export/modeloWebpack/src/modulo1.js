// Utilizando export na criação das funções, classes e variaveis(const, let);

export const nome = "José";
export const sobrenome = "Carlos";
export const idade = 38;
// variável não será exportada.
const cpf = "000.111.222-33";

export function soma(x, y) {
  return x + y;
}

export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// exportando algum elemento padrão do modulo1. Neste caso somente um item pode ser default.
export default function sub(x, y) {
  return x - y;
}

// Declarando e exportanto após a criação.
// const nome = "José";
// const sobrenome = "Carlos";
// const idade = 30;

// function soma(x, y) {
//   return x + y;
// }

// export { nome, sobrenome, idade, soma };

const nome = "José";
const obj = { nome };
const newObj = { ...obj };
console.log(newObj);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

/*
 * Funções Fábricas: funções que devolve um objeto.
 * this : sempre é utilizado pelo objeto que está sendo chamado
 */

function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },
    altura: altura,
    peso: peso,
    imc() {
      const indice = this.peso / this.altura ** 2;
      return `O Imc é: ${indice.toFixed(2)}`;
    },
  };
}

const p1 = criaPessoa("José", "Carlos", 1.84, 100);

const p2 = criaPessoa("Maria", "Joaquina", 1.6, 42);

console.log(p1.fala("falando sobre JS"));
console.log(p1.imc());
console.log(p2.fala("falando sobre JS"));
console.log(p2.imc());
